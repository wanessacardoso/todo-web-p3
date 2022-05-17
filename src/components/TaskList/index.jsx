import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.Container}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          name={task.description}
          completed={task.completed}
        />
      ))}
    </ul>
  );
};

export default TaskList;
