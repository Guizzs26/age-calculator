import styles from "./age-display.module.css";

export type AgeDisplayProps = {
  age: {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export const AgeDisplay = ({ age }: AgeDisplayProps) => {
  const formatUnit = (value: number, singular: string, plural: string) => {
    return value === 1 ? singular : plural;
  };

  return (
    <div className={styles.ageDisplayContainer}>
      <p className={styles.ageDisplayValue}>
        <span>{age.years}</span> {formatUnit(age.years, "Year", "Years")}
      </p>

      <p className={styles.ageDisplayValue}>
        <span>{age.months}</span> {formatUnit(age.months, "Month", "Months")}
      </p>

      <p className={styles.ageDisplayValue}>
        <span>{age.days}</span> {formatUnit(age.days, "Day", "Days")}
      </p>

      <p className={styles.ageDisplaySecondaryValue}>
        <span>{age.hours}</span> {formatUnit(age.hours, "Hour", "Hours")}
      </p>

      <p className={styles.ageDisplaySecondaryValue}>
        <span>{age.minutes}</span>{" "}
        {formatUnit(age.minutes, "Minute", "Minutes")}
      </p>

      <p className={styles.ageDisplaySecondaryValue}>
        <span>{age.seconds}</span>{" "}
        {formatUnit(age.seconds, "Second", "Seconds")}
      </p>
    </div>
  );
};
