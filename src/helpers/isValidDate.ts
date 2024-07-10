export const isValidDay = (input: number): boolean => {
  if (
    Number.isNaN(input) ||
    !Number.isInteger(input) ||
    input < 1 ||
    input > 31
  ) {
    return false;
  }
  return true;
};

export const isValidMonth = (input: number): boolean => {
  if (
    Number.isNaN(input) ||
    !Number.isInteger(input) ||
    input < 1 ||
    input > 12
  ) {
    return false;
  }
  return true;
};

export const isValidYear = (input: number): boolean => {
  const currentYear = new Date().getFullYear();
  if (
    Number.isNaN(input) ||
    !Number.isInteger(input) ||
    input < 1950 ||
    input > currentYear
  ) {
    return false;
  }
  return true;
};
