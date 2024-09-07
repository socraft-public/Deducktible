export const calculateEffectiveCost = (
  deductible: number,
  premium: number,
  totalBilled: number,
) => {
  const participationRate = 0.1;
  const participationThreshold = 7000;
  let effectiveCost = premium;

  if (totalBilled <= deductible) {
    effectiveCost += totalBilled;
  } else {
    const excess = totalBilled - deductible;

    if (excess <= participationThreshold) {
      const participation = excess * participationRate;
      effectiveCost += deductible + participation;
    } else {
      effectiveCost += deductible + participationThreshold * participationRate;
    }
  }
  return effectiveCost;
};
