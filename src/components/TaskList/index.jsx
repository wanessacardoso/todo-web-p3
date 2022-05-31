import { useTasks } from "../../hooks/useTasks";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul className={styles.Container}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
