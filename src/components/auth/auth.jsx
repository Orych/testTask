import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'root' && password === 'pass') {
      const token = btoa(`${username}:${password}`);
      console.log(`Token: ${token}`);
      localStorage.setItem("token", token);
      alert('Успешная авторизация');
    } else {
      console.log('Неверный логин или пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Логин:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Пароль:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Войти</button>
    </form>
  );
}

export default LoginForm;