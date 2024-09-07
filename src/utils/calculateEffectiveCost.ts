const PARTICIPATION_RATE = 0.1;
const PARTICIPATION_THRESHOLD = 7000;

export const calculateEffectiveCost = (
  deductible: number,
  premium: number,
  billedCost: number,
) => {
  let actualCost = premium;

  if (billedCost <= deductible) {
    actualCost += billedCost;
  } else {
    const excess = billedCost - deductible;

    if (excess <= PARTICIPATION_THRESHOLD) {
      const participation = excess * PARTICIPATION_RATE;
      actualCost += deductible + participation;
    } else {
      actualCost += deductible + PARTICIPATION_THRESHOLD * PARTICIPATION_RATE;
    }
  }
  return actualCost;
};
