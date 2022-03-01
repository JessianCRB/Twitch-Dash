import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Head';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Login realizado! ');
  }

  return (
    <section className="animeLeft">
      <Head
        title="Login"
        description="Área de realizar o login ou criar um nova conta ou solicitar a senha perdida."
      />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button onClick={(event) => (window.location.href = '/streamers')}>
          Entrar
        </Button>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
