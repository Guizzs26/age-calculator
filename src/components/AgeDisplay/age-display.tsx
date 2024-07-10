import styles from "./age-display.module.css";

export type AgeDisplayProps = {
  age: { years: number; months: number; days: number };
};

export const AgeDisplay = ({ age }: AgeDisplayProps) => {
  return (
    <div className={styles.ageDisplayContainer}>
      <p className={styles.ageDisplayValue}>
        <span>{age.years}</span> Years
      </p>

      <p className={styles.ageDisplayValue}>
        <span>{age.months}</span> Months
      </p>

      <p className={styles.ageDisplayValue}>
        <span>{age.days}</span> Days
      </p>
    </div>
  );
};
