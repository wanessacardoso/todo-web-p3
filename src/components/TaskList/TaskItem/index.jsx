import styles from "./TaskItem.module.scss";

const TaskItem = (props) => {
  return (
    <li className={styles.Item}>
      <input type="checkbox" name="tarefa1" checked={props.completed} />
      <span>{props.name}</span>
      <button>✒️</button>
      <button>🗑️</button>
    </li>
  );
};

export default TaskItem;
