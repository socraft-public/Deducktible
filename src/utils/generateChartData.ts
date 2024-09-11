import { calculateEffectiveCost } from "./calculateEffectiveCost";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

const MAX_BILLED = 15000;

export const generateChartData = (contracts: InsuranceContract[]) => {
  const stepSize = 100;
  const xData: number[] = [];

  for (
    let totalBilled: number = 0;
    totalBilled <= MAX_BILLED;
    totalBilled += stepSize
  ) {
    xData.push(totalBilled);
  }

  return contracts.map((contract) => {
    const yData = xData.map((totalBilled) =>
      calculateEffectiveCost(
        contract.deductible,
        contract.premium,
        totalBilled,
      ),
    );

    return {
      id: contract.name,
      data: yData,
      color: contract.color,
    };
  });
};
