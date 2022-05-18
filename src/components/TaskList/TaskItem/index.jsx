import { useRef, useState } from "react";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task, updateTask, removeTask }) => {
  const { id, description, completed } = task;
  const [name, setName] = useState(description);

  const [edit, setEdit] = useState(false);

  const handleCheckboxChange = (event) => {
    const modifiedTask = { ...task, completed: !completed };
    updateTask(modifiedTask);
  };

  const handleRemove = () => {
    removeTask(id);
  };

  const handleSave = () => {
    const modifiedTask = { ...task, description: name };
    updateTask(modifiedTask);
    setEdit(false);
  };

  return (
    <li className={styles.Item}>
      <input
        type="checkbox"
        name="tarefa1"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      {edit ? (
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      ) : (
        <span>{description}</span>
      )}
      {edit ? (
        <button onClick={handleSave}>💾</button>
      ) : (
        <button onClick={() => setEdit(true)}>✒️</button>
      )}

      <button onClick={handleRemove}>🗑️</button>
    </li>
  );
};

export default TaskItem;
