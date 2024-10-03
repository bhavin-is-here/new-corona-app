import React from 'react'

const AboutModal = () => {
    return (
        <div>
            <p>
                <b>Please note: This tracker has been discontinued. Latest data available for of July 21, 2024.</b>
            </p>
            <p>
                <b>The COVID-19 tracker in a nutshell</b>
            </p>
            <p>
                The first case of COVID-19 was recorded on December 31, 2019, in Wuhan, China (WHO). This visualization
                shows the recorded number of confirmed cases and deaths across the world. The size of the circle represents
                the number of cases in one location. In the panel on the left, you can choose a country from the drop-down menu
                and see the total global number of confirmed cases and deaths. By selecting a country, the view of those numbers 
                will represent the overview for the chosen geography. 
            </p> <br/>

                <b>COVID-19 tracker data sources</b> <br/>
            <p>
                The tracker visualizes data from 
                <a href="https://ourworldindata.org/coronavirus" target='_blank'>OWID</a> and 
                <a href="https://github.com/owid/covid-19-data/tree/master/public/data" target='_blank'> GitHub.</a>


            </p>

        </div>
    )
}

export default AboutModal