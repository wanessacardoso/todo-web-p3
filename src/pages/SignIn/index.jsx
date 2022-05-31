import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Template from "../../containers/Template";
import { AuthContext, AuthProvider } from "../../providers/AuthProvider";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailInputRef.current || !passwordInputRef.current) {
      return;
    }
    const email = emailInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();

    if (!email || !password) {
      return;
    }
    try {
      await signIn({ email, password });
    } catch (error) {
      alert(" Login ou senha inválidos");
    }

    navigate("/home");
  };

  return (
    <Template title="Login">
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail de Usuário</label>
        <input
          type="email"
          id="email"
          aria-describedby="email"
          placeholder="Digite seu email"
          ref={emailInputRef}
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
