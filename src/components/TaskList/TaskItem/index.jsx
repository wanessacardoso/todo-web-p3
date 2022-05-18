import styles from "./TaskItem.module.scss";

const TaskItem = ({ task, updateTask, removeTask }) => {
  const { description: name, completed } = task;

  const handleCheckboxChange = (event) => {
    const modifiedTask = { ...task, completed: !completed };
    updateTask(modifiedTask);
  };

  return (
    <li className={styles.Item}>
      <input
        type="checkbox"
        name="tarefa1"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span>{name}</span>
      <button>✒️</button>
      <button>🗑️</button>
    </li>
  );
};

export default TaskItem;
