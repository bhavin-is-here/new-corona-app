import React, { useMemo } from 'react';
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';

const PieChart = ({ worldCase }) => {
  const pieData = useSelector(state => state.latlong);
  console.log("worldCases==>", pieData);

  const data = useMemo(() => [
    ["Corona", "Affected and Non Affected"],
    ["Non-Affected", pieData?.confirmNonCases ? Number(pieData.confirmNonCases) : worldCase?.total_non_cases],  
    ["Affected", pieData?.confirmCases ? Number(pieData.confirmCases) : Number(worldCase?.total_cases)],

  ], [pieData, worldCase]);
  console.log("datass==>",data,worldCase)

  const options = {
    title: "Covid-19 Chart",
    is3D: true,
    titleTextStyle: {
      fontSize: 18, // Increase this value to make the title larger
      bold: true,   // Make the title bold
    },
    legend: {
      textStyle: {
        fontSize: 13, // Increase this value to make the labels larger
           // Make the labels bold
      },
    },
  };

  return (
    <div className='pie-chart-box'>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"190px"}
      />
    </div>
  );
};

export default PieChart;
