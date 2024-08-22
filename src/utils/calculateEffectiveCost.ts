export const calculateEffectiveCost = (
  franchise: number,
  insurancePremium: number,
  totalBilled: number,
) => {
  const participationRate = 0.1;
  const participationThreshold = 7000;
  let effectiveCost = insurancePremium;

  if (totalBilled <= franchise) {
    effectiveCost += totalBilled;
  } else {
    const excess = totalBilled - franchise;

    if (excess <= participationThreshold) {
      const participation = excess * participationRate;
      effectiveCost += franchise + participation;
    } else {
      effectiveCost += franchise + participationThreshold * participationRate;
    }
  }
  return effectiveCost;
};
