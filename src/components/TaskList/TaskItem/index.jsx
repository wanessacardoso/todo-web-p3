import { useState } from "react";
import { useTasks } from "../../../hooks/useTasks";
import styles from "./TaskItem.module.scss";

const TaskItem = ({ task }) => {
  const { removeTask, updateTask } = useTasks();
  const { _id, description, completed } = task;
  const [name, setName] = useState(description);

  const [edit, setEdit] = useState(false);

  const handleCheckboxChange = (event) => {
    const modifiedTask = { ...task, completed: !completed };
    updateTask(modifiedTask);
  };

  const handleRemove = () => {
    removeTask(_id);
  };

  const handleSave = () => {
    const modifiedTask = { ...task, description: name };
    updateTask(modifiedTask);
    setEdit(false);
  };

  const renderDescription = () => {
    if (edit) {
      return (
        <>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <button onClick={handleSave}>💾</button>
        </>
      );
    }
    return (
      <>
        <span className={completed ? styles.marked : ""}>{description}</span>
        <button onClick={() => setEdit(true)}>✒️</button>
      </>
    );
  };

  return (
    <li className={styles.Item}>
      <input
        type="checkbox"
        name={`task-${_id}`}
        checked={completed}
        onChange={handleCheckboxChange}
      />
      {renderDescription()}
      <button onClick={handleRemove}>🗑️</button>
    </li>
  );
};

export default TaskItem;
