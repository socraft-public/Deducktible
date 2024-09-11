import { axisClasses, LineChart } from "@mui/x-charts";
import React from "react";
import { generateChartData } from "../utils/generateChartData";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

interface ChartProps {
  contracts: InsuranceContract[];
}

const Chart: React.FC<ChartProps> = ({ contracts }) => {
  if (!contracts.length) {
    return <div className="no-data">Ajoutez au moins un contrat</div>;
  }

  const data = generateChartData(contracts);

  return (
    <LineChart
      className="chart"
      series={data.map((serie) => ({
        id: serie.id,
        data: serie.data,
        color: serie.color,
        showMark: false,
      }))}
      grid={{
        vertical: true,
        horizontal: true,
      }}
      xAxis={[
        {
          label: "Frais médicaux facturés à l'assurance (CHF)",
          data: data[0].data.map((_, index) => index * 100),
        },
      ]}
      yAxis={[
        {
          label: "Coûts effectifs payés par l'assuré (CHF)",
        },
      ]}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translate(55px, -500px)",
          rotate: "90deg",
        },
        [`& .${axisClasses.bottom} .${axisClasses.label}`]: {
          transform: "translateY(10px)",
        },
      }}
    />
  );
};
export default Chart;
