import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

import styles from "./App.module.scss";
import { TaskForm } from "./components/TaskForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const BASEURL = `http://localhost:3001`;
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const response = await fetch(`${BASEURL}/tasks`);
      const data = await response.json();
      setTasks(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const addTask = async (task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    try {
      console.log(task);
      await fetch(`${BASEURL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel adicionar a tarefa");
    }
  };

  const updateTask = async (task) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t.id === task.id);
    if (index === -1) {
      return;
    }
    try {
      await fetch(`${BASEURL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      Object.assign(tasksCopy[index], task);
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel atualizar a tarefa");
    }
  };

  const removeTask = async (id) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t.id === id);
    if (index === -1) {
      return;
    }
    try {
      await fetch(`${BASEURL}/tasks/${id}`, {
        method: "DELETE",
      });
      tasksCopy.splice(index, 1);
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel remover a tarefa");
    }
  };

  return (
    <div className={styles.Container}>
      <Header title="My Todo App" />
      <main>
        <TaskForm submitTask={addTask} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          removeTask={removeTask}
        />
        <section style={{ padding: "32px" }}></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
