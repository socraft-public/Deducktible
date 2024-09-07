import { axisClasses, LineChart } from "@mui/x-charts";
import React from "react";
import { generateChartData } from "../utils/generateChartData";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

interface ChartProps {
  contracts: InsuranceContract[];
  estimatedCost: number;
}

const Chart: React.FC<ChartProps> = ({ contracts, estimatedCost }) => {
  if (!estimatedCost || !contracts.length) {
    return <div className="no-data">Aucune donnée</div>;
  }

  const data = generateChartData(contracts, estimatedCost * 2);

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
          label: "Montant annuel total facturé (CHF)",
          data: data[0].data.map(
            (_, index) => (index * estimatedCost * 2) / 70,
          ),
        },
      ]}
      yAxis={[
        {
          label: "Montant annuel payé par l'assuré (CHF)",
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
