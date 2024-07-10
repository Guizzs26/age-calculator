import styles from "./App.module.css";

import InputForm from "./components/InputForm/input-form";

export default function App() {
  return (
    <div className={styles.container}>
      <InputForm />
    </div>
  );
}
