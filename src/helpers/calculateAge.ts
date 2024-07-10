export const calculateAge = (
  day: number,
  month: number,
  year: number
): {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null => {
  // Check if any input is not a valid number
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  // Construct date object from input values
  const birthDate = new Date(year, month - 1, day); // month - 1 because month is zero-based in Date constructor

  // Get current date
  const currentDate = new Date();

  // Calculate difference in years, months, and days
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();
  let hours = currentDate.getHours() - birthDate.getHours();
  let minutes = currentDate.getMinutes() - birthDate.getMinutes();
  let seconds = currentDate.getSeconds() - birthDate.getSeconds();

  // Adjust negative months or days
  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );

    days += prevMonth.getDate();
    months--;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  return { years, months, days, hours, minutes, seconds };
};
