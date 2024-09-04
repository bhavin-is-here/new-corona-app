import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lat, long, confirmCases, confirmDeaths, confirmNonCases } from '@/redux/slice/latlongSlice';
import CountrySelectBox from './CountrySelectBox';
import ShowCases from './ShowCases';
import ListOfCountries from './ListOfCountries';
import LogoTitle from './LogoTitle';
import PieChart from './PieChart';

const SideNavbar = () => {
  const [menuList, setMenuList] = useState([]);
  const [worldCase, setWorldCase] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch and parse the CSV data
    fetch('/covid-data.csv')
      .then(response => response.text())
      .then(data => {
        const parsedData = parseCSV(data);
        setMenuList(parsedData);
        extractWorldCase(parsedData)
      })
      .catch(error => console.error('Error fetching or parsing CSV:', error));
  }, []);

  const parseCSV = (data) => {
    const rows = data.trim().split('\n').slice(1); // Skip the header row
    return rows.map(row => {
      const columns = row.split(',');
      return {
        value: columns[2],
        label: columns[2],
        total_cases: columns[4],
        total_non_cases:Number(columns[15] - Number(columns[4])),
        total_deaths: columns[7],
        lat: parseFloat(columns[8]),
        long: parseFloat(columns[9]),

      }; // Using column 2 as value and label
    });
  };
  console.log("menuList==>",menuList)

  const extractWorldCase = (data) => {
    const worldData = data.find(item => item.value === 'World');
    if (worldData) {
      console.log(worldData, "checkingworld");
      setWorldCase(worldData);
    } else {
      console.error('World data not found');
    }
  }

  const handleSelectChange = (selectedOption) => {
    const latValue = selectedOption?.lat || "";
    const longValue = selectedOption?.long || "";
    const totalCases = selectedOption?.total_cases || "";
    const totalDeaths = selectedOption?.total_deaths || "";
    const totalNonCases = selectedOption && String(selectedOption?.total_non_cases) || "";

     console.log("selectedOption",selectedOption)

    dispatch(lat(latValue));        // Set latitude
    dispatch(long(longValue));      // Set longitude
    dispatch(confirmCases(totalCases));  // Set total cases
    dispatch(confirmDeaths(totalDeaths)); // Set total deaths
    dispatch(confirmNonCases(totalNonCases)); //Set total nonCases
  };

  return (
    <div className="sideBar">
      <LogoTitle/>
      
      <CountrySelectBox
        menuList={menuList}
        handleSelectChange={handleSelectChange}
      />

      <ShowCases
        worldCase={worldCase}
      />

    `  {/* <PieChart
        worldCase={worldCase}
      
      />` */}

      <ListOfCountries
        menuList={menuList}
      />

    </div>
  );
};

export default SideNavbar;
