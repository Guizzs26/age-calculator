import styles from "./input-form.module.css";

export type InputFormProps = {};

export default function InputForm(props: InputFormProps) {
  return (
    <>
      <h1 className={styles.heading}>Enter your birth date</h1>
      <form className={styles.inputForm}>
        <label htmlFor="day">Day</label>
        <input
          type="text"
          id="day"
          name="day"
          placeholder="DD"
          className={styles.dateInput}
        />

        <label htmlFor="month">Month</label>
        <input
          type="text"
          id="month"
          name="month"
          placeholder="MM"
          className={styles.dateInput}
        />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YYYY"
          className={styles.dateInput}
        />

        <button type="submit">Calculate</button>
      </form>
    </>
  );
}
