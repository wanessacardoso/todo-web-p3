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

  const updateTask = (task) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t.id === task.id);
    if (index === -1) {
      return;
    }
    Object.assign(tasksCopy[index], task);
    setTasks(tasksCopy);
  };

  const removeTask = (id) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t.id === id);
    if (index === -1) {
      return;
    }
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  return (
    <div className={styles.Container}>
      <header>
        <h1>My ToDo App</h1>
      </header>
      <main>
        <TaskForm submitTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          removeTask={removeTask}
        />
        <section style={{ padding: "32px" }}></section>
      </main>
      <footer>Criado pela turma do 4 semestre</footer>
    </div>
  );
}

export default App;
