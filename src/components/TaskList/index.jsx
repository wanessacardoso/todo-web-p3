import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = ({ tasks, updateTask, removeTask }) => {
  return (
    <ul className={styles.Container}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
