import styles from "./App.module.css";

import { InputForm } from "./components/InputForm";
import { AgeDisplay } from "./components/AgeDisplay";
import { useState } from "react";

export default function App() {
  const [age, setAge] = useState({});

  const handleAge = (calculatedDate: number) => {
    setAge(calculatedDate);
  };

  return (
    <div className={styles.container}>
      <InputForm onAge={handleAge} />
      <AgeDisplay />
    </div>
  );
}
