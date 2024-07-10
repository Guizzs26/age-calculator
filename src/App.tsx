import styles from "./App.module.css";
import { useState, useEffect } from "react";

import { InputForm } from "./components/InputForm";
import { AgeDisplay } from "./components/AgeDisplay";
import { calculateAge } from "./helpers/calculateAge";

export default function App() {
  const [birthDate, setBirthDate] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);

  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    if (birthDate) {
      const intervalId = setInterval(() => {
        const calculatedAge = calculateAge(
          birthDate.day,
          birthDate.month,
          birthDate.year
        );
        setAge(calculatedAge);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [birthDate]);

  const handleAge = (day: number, month: number, year: number) => {
    setBirthDate({ day, month, year });
  };

  return (
    <div className={styles.container}>
      <InputForm onAge={handleAge} />
      {age && <AgeDisplay age={age} />}
    </div>
  );
}
