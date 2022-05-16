import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.Container}>
      <header>
        <h1>Meu primeiro app react</h1>
      </header>
      <main>
        <form>
          <input type="text" />
          <button type="submit">Criar</button>
        </form>

        <ul>
          <li>
            <input type="checkbox" name="tarefa1" />
            <span>Tarefa 1</span>
            <button>✒️</button>
            <button>🗑️</button>
          </li>
          <li>
            <input type="checkbox" name="tarefa2" />
            <span>Tarefa 2</span>
            <button>✒️</button>
            <button>🗑️</button>
          </li>
          <li>
            <input type="checkbox" name="tarefa3" />
            <span>Tarefa 3</span>
            <button>✒️</button>
            <button>🗑️</button>
          </li>
        </ul>
      </main>
      <footer>Criado pela turma do 4 semestre</footer>
    </div>
  );
}

export default App;
