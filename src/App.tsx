import styles from "./App.module.css";
import { useState } from "react";

import { InputForm } from "./components/InputForm";
import { AgeDisplay } from "./components/AgeDisplay";

export default function App() {
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const handleAge = (
    calculatedAge: { years: number; months: number; days: number } | null
  ) => {
    setAge(calculatedAge);
  };

  return (
    <div className={styles.container}>
      <InputForm onAge={handleAge} />
      {age && <AgeDisplay age={age} />}
    </div>
  );
}
