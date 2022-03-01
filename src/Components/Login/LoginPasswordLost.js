import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Head from '../Head';

const LoginPasswordLost = () => {
  const email = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Requisição enviada!');
  }

  return (
    <section className="animeLeft">
      <Head
        title="Perdeu a senha?"
        description="Espaço reservado para recuperar a senha."
      />
      <h1 className="title">Perdeu a Senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...email} />
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
