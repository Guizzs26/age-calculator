import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./input-form.module.css";

export type InputFormProps = {
  onAge: (calculatedAge: number) => void;
};

export function InputForm({ onAge }: InputFormProps) {
  const [day, setDay] = useState<string | number>("");
  const [month, setMonth] = useState<string | number>("");
  const [year, setYear] = useState<string | number>("");

  const handleChangeDayInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(Number(e.target.value));
  };

  const handleChangeMonthInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(Number(e.target.value));
  };

  const handleChangeYearInput = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className={styles.inputHeading}>Enter your birth date</h1>

      <form onSubmit={handleSubmitForm} className={styles.inputForm}>
        <div className={styles.inputsBox}>
          <div className={styles.singleInput}>
            <label htmlFor="day" className={styles.singleInputLabel}>
              Day
            </label>
            <input
              type="text"
              id="day"
              name="day"
              maxLength={2}
              placeholder="DD"
              value={day}
              onChange={handleChangeDayInput}
              className={styles.dateInput}
            />
          </div>

          <div className={styles.singleInput}>
            <label htmlFor="month" className={styles.singleInputLabel}>
              Month
            </label>
            <input
              type="text"
              id="month"
              name="month"
              maxLength={2}
              placeholder="MM"
              value={month}
              onChange={handleChangeMonthInput}
              className={styles.dateInput}
            />
          </div>

          <div className={styles.singleInput}>
            <label htmlFor="year" className={styles.singleInputLabel}>
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              maxLength={4}
              placeholder="YYYY"
              value={year}
              onChange={handleChangeYearInput}
              className={styles.dateInput}
            />
          </div>
        </div>

        <button type="submit" className={styles.calculateBtn}>
          Calculate
        </button>
      </form>
    </>
  );
}
