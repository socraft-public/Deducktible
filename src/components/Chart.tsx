import { axisClasses, LineChart } from "@mui/x-charts";
import React from "react";
import { generateChartData } from "../utils/generateChartData";

interface Franchise {
  name: string;
  color: string;
  franchise: number;
  insurancePremium: number;
}

interface ChartProps {
  franchises: Franchise[];
  estimatedCost: number;
}

const Chart: React.FC<ChartProps> = ({ franchises, estimatedCost }) => {
  if (!estimatedCost || !franchises.length) {
    return <div className="no-data">Aucune donnée</div>;
  }

  const data = generateChartData(franchises, estimatedCost * 2);

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
          label: "Montant total facturé (CHF)",
          data: data[0].data.map(
            (_, index) => (index * estimatedCost * 2) / 70,
          ),
        },
      ]}
      yAxis={[
        {
          label: "Montant payé par l'assuré (CHF)",
        },
      ]}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translate(55px, -465px)",
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
