import { useRef } from "react";
import { Link } from "react-router-dom";
import Template from "../../containers/Template";

import styles from "./SignUp.module.scss";

const SignUp = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const users = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      confirmation: passwordConfirmationInputRef.current.value,
    };
    
  };

  return (
    <Template title="Cadastrar-se">
      <form className={styles.Form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          aria-describedby="name"
          placeholder="Digite seu nome"
          ref={nameInputRef}
        />
        <label htmlFor="age">Idade</label>
        <input
          type="number"
          id="age"
          min={0}
          aria-describedby="age"
          placeholder="Digite sua idade"
          ref={ageInputRef}
        />
        <label htmlFor="email">E-mail de Usuário</label>
        <input
          type="email"
          id="email"
          aria-describedby="email"
          placeholder="Digite seu email"
          ref={emailInputRef}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          ref={passwordInputRef}
        />
        <label htmlFor="password_confirmation">Confirmação</label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirme sua senha"
          ref={passwordConfirmationInputRef}
        />
        <button type="submit">Cadastrar</button>
        <Link to="/"> voltar!</Link>
      </form>
    </Template>
  );
};

export default SignUp;
