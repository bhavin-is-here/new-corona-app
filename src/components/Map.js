

import { formatNumberWithCommas } from '@/utility/helper';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


const Map = () => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);
  const [circleRefs, setCircleRefs] = useState({});
  const latlongRedux = useSelector(state => state.latlong)


  console.log("latlongs==>",latlongRedux)

  // Define handleResize outside of useEffect to avoid closure issues
  const handleResize = () => {
    if (mapRef.current) {
      mapRef.current.getViewPort().resize();
    }
  };

  useEffect(() => {
    const H = window.H;

    if (!mapRef.current) {
      const platform = new H.service.Platform({
        apikey: 'nWIgKHilkHdhQv0XR3JI5-ras5L9aNvujA-b5oEG0Y8Y'
      });
      const engineType = H.Map.EngineType['HARP'];

      const defaultLayers = platform.createDefaultLayers({ engineType });
      const map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          engineType,
          center: { lat: 0, lng: 0 },
          zoom: 2.5,
          pixelRatio: window.devicePixelRatio || 1 ,
          imprint: {
            font: "11px FiraGO",
            mark: `
              <a target="_blank" tabindex="1" href="https://www.here.com/platform" style="color: inherit; margin: 0px 8px; text-decoration: none; pointer-events: all;">HERE platform</a>
              <a target="_blank" tabindex="1" href="https://www.here.com/docs/category/here-sdk-for-js" style="color: inherit; margin: 0px 8px; text-decoration: none; pointer-events: all;">HERE Maps API for JavaScript</a>
            `,
          },
        }
      );
      const mapElement = map.getElement();
      const copyrightElement =
        mapElement.getElementsByClassName("H_copyright")[0];
      copyrightElement.insertBefore(
        copyrightElement.lastChild,
        copyrightElement.firstChild
      );

      // Add UI controls
      const ui = H.ui.UI.createDefault(map, defaultLayers);
      ui.removeControl('mapsettings');
      ui.removeControl('scalebar');
    

      // Enable map interaction
      const mapEvents = new H.mapevents.MapEvents(map);
      const behavior = new H.mapevents.Behavior(mapEvents);

      // Restrict zoom level to a maximum of 5 and minimum of 2.5
      map.addEventListener('mapviewchange', () => {
        const zoom = map.getZoom();
        if (zoom > 5) {
          map.setZoom(5);
        }
        if (zoom < 2.5) {
          map.setZoom(2.5);
        }
      });

      // Fetch and parse the CSV data
      fetch('/covid-data.csv')
        .then(response => response.text())
        .then(data => {
          const parsedData = parseCSV(data);
          addCoronaDataToMap(parsedData);
        })
        .catch(error => console.error('Error fetching or parsing CSV:', error));

      function parseCSV(data) {
        const rows = data.trim().split('\n').slice(1); // Trim and split rows, then skip header
        return rows.map(row => {
          const columns = row.split(',');
          return {
            location: columns[2],
            total_cases: columns[4],
            total_deaths: columns[7],
            lat: parseFloat(columns[8]),
            long: parseFloat(columns[9]),
          };
        });
      }

      function addCoronaDataToMap(coronaCircles) {
        const specificLocations = ['United States', 'Russia', 'Brazil', 'India', 'China', 'United Kingdom', 'Argentina'];
        const newCircleRefs = {};
        coronaCircles.forEach(coronaData => {
          try {
            const { lat, long, total_cases, total_deaths, location } = coronaData;

            // Function to update the circle size based on zoom level
            const updateCircleSize = () => {
              const currentZoomLevel = map.getZoom();
              const size = Math.sqrt(total_deaths) * 2000 / currentZoomLevel;
              return size;
            };

            const updateDotSize = () => {
              const currentZoomLevel = map.getZoom();
              const dotSize = Math.sqrt(total_deaths) * 300 / currentZoomLevel; // Smaller size for the black dot
              return dotSize;
            };

            

            // Create the green circle
            let circleSize = updateCircleSize();
            const greenCircle = new H.map.Circle(
              { lat: lat, lng: long },
              circleSize,
              {
                style: {
                  strokeColor: 'rgba(255, 255, 255, 0.75)',
                  lineWidth: 1,
                  fillColor: 'rgb(250, 210, 97)'
                }
              }
            );

             // Store reference
            newCircleRefs[`${lat},${long}`] = greenCircle;

            // Create the black dot
            let dotSize = updateDotSize();
            const blackDot = new H.map.Circle(
              { lat: lat, lng: long },
              dotSize,
              {
                style: {
                  strokeColor: 'rgba(0, 0, 0)',
                  lineWidth: 0,
                  fillColor: 'rgba(0, 0, 0, 1)',
                }
              }
            );

            // Add event listeners to the green circle
            greenCircle.addEventListener('tap', function (evt) {
              const target = evt.target;
             
              map.getViewModel().setLookAtData({
                zoom: 5,
                bounds: target.getBoundingBox(),
                animation: {
                  duration: 1500, // Duration in milliseconds
                  easing: 'linear'
                },
              });
            });

            greenCircle.addEventListener('pointerenter', () => {
              showPopup(lat, long, location, total_cases, total_deaths);
              map.getElement().style.cursor = 'pointer';
            });

            greenCircle.addEventListener('pointerleave', () => {
              hidePopup();
              map.getElement().style.cursor = '';
            });

            // Add event listeners to the black dot
            blackDot.addEventListener('tap', function (evt) {
              const target = evt.target;
              map.getViewModel().setLookAtData({
                zoom: 5,
                bounds: target.getBoundingBox(),
                animation: {
                  duration: 1500 ,// Duration in milliseconds
                  easing: 'linear'
                }
              });
            });

            blackDot.addEventListener('pointerenter', () => {
              showPopup(lat, long, location, total_cases, total_deaths);
              map.getElement().style.cursor = 'pointer';
            });

            blackDot.addEventListener('pointerleave', () => {
              hidePopup();
              map.getElement().style.cursor = '';
            });

            // Add both the green circle and the black dot to the map
            map.addObject(greenCircle);
            map.addObject(blackDot);

            // Add labels for specific locations
            if (specificLocations.includes(location)) {
              const label = new H.map.DomMarker({ lat: lat, lng: long }, {
                icon: new H.map.DomIcon(`<div style="color: black; background-color: white; padding: 7px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  border-radius: 3px;"> ${ formatNumberWithCommas(total_cases)} <br> Cases</div>`)
              });
              map.addObject(label);
            }

            // Update circle and dot size on zoom level change
            map.addEventListener('mapviewchangeend', () => {
              const newSize = updateCircleSize();
              greenCircle.setRadius(newSize);

              const newDotSize = updateDotSize();
              blackDot.setRadius(newDotSize);
            });

          } catch (error) {
            console.error('Error processing coronaData:', error, coronaData);
          }
        });
        setCircleRefs(newCircleRefs);
      }

      function showPopup(lat, long, location, total_cases, total_deaths) {
        if (popupRef.current) {
          popupRef.current.innerHTML = `<div><strong>${location}</strong><br>Total Cases: ${formatNumberWithCommas(total_cases)}<br>Total Deaths: ${formatNumberWithCommas(total_deaths)}</div>`;
        } else {
          const popup = document.createElement('div');
          popup.style.position = 'absolute';
          popup.style.backgroundColor = 'white';
          popup.style.border = '1px solid black';
          popup.style.padding = '10px';
          popup.style.borderRadius = '5px';
          popup.style.pointerEvents = 'none';
          popup.innerHTML = `<div><strong>${location}</strong><br>Total Cases: ${formatNumberWithCommas(total_cases)}<br>Total Deaths: ${formatNumberWithCommas(total_deaths)}</div>`;

          document.getElementById('mapContainer').appendChild(popup);
          popupRef.current = popup;
        }

        const coord = map.geoToScreen({ lat, lng: long });
        popupRef.current.style.left = `${coord.x}px`;
        popupRef.current.style.top = `${coord.y}px`;
      }

      function hidePopup() {
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      }

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      mapRef.current = map;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && latlongRedux && latlongRedux.lat && latlongRedux.long) {
      const { lat, long } = latlongRedux;
      const circleKey = `${lat},${long}`;
      const greenCircle = circleRefs[circleKey];
  
      if (greenCircle) {
        mapRef.current.getViewModel().setLookAtData({
          zoom: 5,
          bounds: greenCircle.getBoundingBox(),
          animation: {
            duration: 1500 ,// Duration in milliseconds
            easing: 'linear'
          }
        });
      }
    }
  }, [latlongRedux, circleRefs]);
  

  return <div id="mapContainer" style={{ width: '100%', height: '100vh', position: 'relative' }} />;
};

export default Map;
