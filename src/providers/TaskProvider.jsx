import { createContext, useEffect, useState } from "react";
import TaskService from "../services/task.service";

export const TasksContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const taskList = await TaskService.getAll();
      setTasks(taskList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const addTask = async (task) => {
    const tasksCopy = [...tasks];
    try {
      const newTask = await TaskService.add(task);
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel adicionar a tarefa");
    }
  };

  const updateTask = async (task) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t._id === task._id);
    if (index === -1) {
      return;
    }
    try {
      await TaskService.update(task);
      Object.assign(tasksCopy[index], task);
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel atualizar a tarefa");
    }
  };

  const removeTask = async (id) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex((t) => t._id === id);
    if (index === -1) {
      return;
    }
    try {
      await TaskService.delete(id);
      tasksCopy.splice(index, 1);
      setTasks(tasksCopy);
    } catch (error) {
      alert("não foi possivel remover a tarefa");
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        removeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
