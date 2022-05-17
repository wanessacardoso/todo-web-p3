import TaskList from "./components/TaskList";

import styles from "./App.module.scss";

const tasks = [
  { id: 1, name: "Fazer o almoço", completed: true },
  { id: 2, name: "Fazer a feira", completed: false },
  { id: 3, name: "trabalhar", completed: false },
  { id: 4, name: "Estudar", completed: false },
];

function App() {
  return (
    <div className={styles.Container}>
      <header>
        <h1>My ToDo App</h1>
      </header>
      <main>
        <form>
          <input type="text" />
          <button type="submit">Criar</button>
        </form>
        <TaskList tasks={tasks} />
      </main>
      <footer>Criado pela turma do 4 semestre</footer>
    </div>
  );
}

export default App;
