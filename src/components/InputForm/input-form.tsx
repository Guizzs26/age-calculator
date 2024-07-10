import styles from "./input-form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

import {
  isValidDay,
  isValidMonth,
  isValidYear,
} from "../../helpers/isValidDate";

export type InputFormProps = {
  onAge: (day: number, month: number, year: number) => void;
};

export function InputForm({ onAge }: InputFormProps) {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [dayError, setDayError] = useState<boolean>(false);
  const [monthError, setMonthError] = useState<boolean>(false);
  const [yearError, setYearError] = useState<boolean>(false);

  const handleChangeDayInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDay(value.replace(/[^0-9]/g, ""));

    if (value.length > 1 && !isValidDay(Number(value))) {
      setDayError(true);
    } else {
      setDayError(false);
    }
  };

  const handleChangeMonthInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMonth(value.replace(/[^0-9]/g, ""));

    if (value.length > 1 && !isValidMonth(Number(value))) {
      setMonthError(true);
    } else {
      setMonthError(false);
    }
  };

  const handleChangeYearInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value.replace(/[^0-9]/g, ""));

    if (value.length > 3 && !isValidYear(Number(value))) {
      setYearError(true);
    } else {
      setYearError(false);
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (day === "" || month === "" || year === "") {
      if (day === "") setDayError(true);
      if (month === "") setMonthError(true);
      if (year === "") setYearError(true);

      return;
    }

    const dayNumber = Number(day);
    const monthNumber = Number(month);
    const yearNumber = Number(year);

    if (
      isValidDay(dayNumber) &&
      isValidMonth(monthNumber) &&
      isValidYear(yearNumber)
    ) {
      onAge(dayNumber, monthNumber, yearNumber);
    } else {
      console.error("Invalid date data");
    }
  };

  return (
    <>
      <h1 className={styles.inputHeading}>Enter your birth date</h1>
      <form onSubmit={handleSubmitForm} className={styles.inputForm}>
        <div className={styles.inputsBox}>
          <div className={styles.singleInput}>
            <label
              htmlFor="day"
              className={`${styles.singleInputLabel} ${
                dayError ? styles.errorLabel : ""
              }`}
            >
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
            {dayError && <p className={styles.errorText}>Invalid day</p>}
          </div>

          <div className={styles.singleInput}>
            <label
              htmlFor="month"
              className={`${styles.singleInputLabel} ${
                monthError ? styles.errorLabel : ""
              }`}
            >
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
            {monthError && <p className={styles.errorText}>Invalid month</p>}
          </div>

          <div className={styles.singleInput}>
            <label
              htmlFor="year"
              className={`${styles.singleInputLabel} ${
                yearError ? styles.errorLabel : ""
              }`}
            >
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
            {yearError && <p className={styles.errorText}>Invalid year</p>}
          </div>
        </div>

        <button type="submit" className={styles.calculateBtn}>
          Calculate
        </button>
      </form>
    </>
  );
}
