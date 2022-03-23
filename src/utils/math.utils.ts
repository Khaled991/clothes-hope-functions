export function getDecimalsOnly(num: number) {
  return num % 1;
}

export function getStarType(num: number) {
  const roundedNum = num % 1;
  if (roundedNum <= 0.25) return 0;
  else if (roundedNum < 0.75) return 0.5;
  else return 1;
}
