import { useRef } from "react";
import styles from "./TaskForm.module.scss";

export const TaskForm = ({ submitTask }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { current: input } = inputRef;

    if (!input || input.value.trim().length === 0) {
      return;
    }

    const task = {
      id: Date.now(),
      description: input.value.trim(),
      completed: false,
    };

    submitTask(task);
    input.value = "";
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
