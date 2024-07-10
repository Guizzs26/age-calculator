export const calculateAge = (
  day: string,
  month: string,
  year: string
): { years: number; months: number; days: number } | null => {
  const dayNumber = parseInt(day, 10);
  const monthNumber = parseInt(month, 10);
  const yearNumber = parseInt(year, 10);

  // Check if any input is not a valid number

  if (isNaN(dayNumber) || isNaN(monthNumber) || isNaN(yearNumber)) return null;

  // Add leading zero if necessary for day and month

  if (dayNumber.toString().length === 1) {
    day = "0" + day;
  }

  if (monthNumber.toString().length === 1) {
    month = "0" + month;
  }

  // Construct date string in YYYY-MM-DD format

  const dateOfBirth = `${year}-${month}-${day}`;

  // Get current date and create date object from date of birth string

  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);

  // Calculate the diff in year, months and days

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getFullYear() - birthDate.getMonth();
  let days = currentDate.getFullYear() - birthDate.getDay();

  // If the month of birth is greater than the current date

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  // If the day of birth is greater than the current date

  if (days < 0) {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    days += prevMonth.getDate();
    months--;
  }

  return { years, months, days };
};
