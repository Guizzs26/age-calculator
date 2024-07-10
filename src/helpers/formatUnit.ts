export const formatUnit = (value: number, singular: string, plural: string) => {
  return value === 1 ? singular : plural;
};
