import { axisClasses, LineChart } from "@mui/x-charts";
import React from "react";
import { generateChartData, MAX_BILLED } from "../utils/generateChartData";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

interface ChartProps {
  contracts: InsuranceContract[];
}

const Chart: React.FC<ChartProps> = ({ contracts }) => {
  if (!contracts.length) {
    return <div className="no-data">Ajoutez au moins un contrat</div>;
  }

  const data = generateChartData(contracts);

  const currencyFormatter = new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0,
    currencyDisplay: "code",
    useGrouping: true,
  }).format;

  return (
    <LineChart
      margin={{ top: 12, right: 24, bottom: 52, left: 68 }}
      className="chart"
      series={data.map((serie) => ({
        id: serie.id,
        data: serie.data,
        color: serie.color,
        showMark: false,
        valueFormatter: (value) => `${currencyFormatter(value || 0)} payés`,
      }))}
      grid={{
        vertical: true,
        horizontal: true,
      }}
      xAxis={[
        {
          label: "Frais médicaux facturés (CHF)",
          data: data[0].data.map((_, index) => index * 100),
          scaleType: "linear",
          valueFormatter: (value, { location }) =>
            location === "tick"
              ? value.toString()
              : `${currencyFormatter(value || 0)} facturés`,
          max: MAX_BILLED,
        },
      ]}
      yAxis={[
        {
          label: "Coûts effectifs payés (CHF)",
        },
      ]}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translateX(-28px)",
        },
        [`& .${axisClasses.bottom} .${axisClasses.label}`]: {
          transform: "translateY(10px)",
        },
      }}
    />
  );
};
export default Chart;
