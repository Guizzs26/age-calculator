import styles from "./age-display.module.css";

export type AgeDisplayProps = {};

export function AgeDisplay(props: AgeDisplayProps) {
  return (
    <div className={styles.ageDisplayContainer}>
      <p className={styles.ageDisplayValue}>
        <span>X</span> Years
      </p>

      <p className={styles.ageDisplayValue}>
        <span>Y</span> Months
      </p>

      <p className={styles.ageDisplayValue}>
        <span>Z</span> Days
      </p>
    </div>
  );
}
