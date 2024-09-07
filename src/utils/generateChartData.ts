import { calculateEffectiveCost } from "./calculateEffectiveCost";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

export const generateChartData = (
  contracts: InsuranceContract[],
  maxBilled: number,
) => {
  const steps = 70;
  const stepSize = maxBilled / steps;
  const xData: number[] = [];

  for (let totalBilled = 0; totalBilled <= maxBilled; totalBilled += stepSize) {
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
