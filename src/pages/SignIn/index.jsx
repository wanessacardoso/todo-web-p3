import { useRef } from "react";
import { Link } from "react-router-dom";
import Template from "../../containers/Template";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!usernameInputRef.current || !passwordInputRef.current) {
      return;
    }
    const username = usernameInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();

    if (!username || !password) {
      return;
    }

    alert(`username: ${username} password: ${password}`);
  };

  return (
    <Template title="Login">
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de Usuário</label>
        <input
          type="text"
          id="username"
          aria-describedby="username"
          placeholder="Digite seu usuário"
          ref={usernameInputRef}
        />
        <label htmlFor="Password">Senha</label>
        <input
          type="password"
          id="Password"
          placeholder="Digite sua senha"
          ref={passwordInputRef}
        />
        <button type="submit">Login</button>
        <Link to="/cadastro">Não tem cadastro, crie sua conta!</Link>
      </form>
    </Template>
  );
};

export default SignIn;
