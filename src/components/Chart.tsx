import { LineChart } from "@mui/x-charts";
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
  if (estimatedCost <= 0 || !franchises.length) {
    return <span>No data</span>;
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
      xAxis={[
        {
          label: "Montant total facturé (CHF)",
          data: data[0].data.map(
            (_, index) => (index * estimatedCost * 2) / 70,
          ),
          valueFormatter: (value: any) => `${value} CHF`,
        },
      ]}
      yAxis={[
        {
          label: "Montant payé par l'assuré (CHF)",
          valueFormatter: (value: any) => `${value} CHF`,
        },
      ]}
    />
  );
};
export default Chart;
