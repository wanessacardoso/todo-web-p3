import { useState } from "react";
import TaskList from "./components/TaskList";

import styles from "./App.module.scss";
import { TaskForm } from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    setTasks(tasksCopy);
  };

  return (
    <div className={styles.Container}>
      <header>
        <h1>My ToDo App</h1>
      </header>
      <main>
        <TaskForm submitTask={addTask} />
        <TaskList tasks={tasks} />
        <section style={{ padding: "32px" }}></section>
      </main>
      <footer>Criado pela turma do 4 semestre</footer>
    </div>
  );
}

export default App;
