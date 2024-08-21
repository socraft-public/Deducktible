import { calculateEffectiveCost } from "./calculateEffectiveCost";

interface Franchise {
  name: string;
  color: string;
  franchise: number;
  insurancePremium: number;
}

export const generateChartData = (
  franchises: Franchise[],
  maxBilled: number,
) => {
  const steps = 70;
  const stepSize = maxBilled / steps;
  const xData: number[] = [];

  for (let totalBilled = 0; totalBilled <= maxBilled; totalBilled += stepSize) {
    xData.push(totalBilled);
  }

  return franchises.map((franchise) => {
    const yData = xData.map((totalBilled) =>
      calculateEffectiveCost(
        franchise.franchise,
        franchise.insurancePremium,
        totalBilled,
      ),
    );

    return {
      id: franchise.name,
      data: yData,
      color: franchise.color,
    };
  });
};
