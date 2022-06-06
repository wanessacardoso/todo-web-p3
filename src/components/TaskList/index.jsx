import { useEffect, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const { tasks, getTasks } = useTasks();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTasks()
      .then(() => setLoading(false))
      .catch((error) => setLoading(false));
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className={styles.Container}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
