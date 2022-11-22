import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/trybe-negativo-preferencial.png';

function Login({ setGitData, history }) {
  const [login, setLogin] = useState({ username: '', password: '', error: null });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`https://api.github.com/users/${login.username}`);

      if (!response.ok) {
        const newError = await response.json();
        throw newError.message;
      }

      const data = await response.json();

      setGitData(data);
      history.push('/home');
    } catch (error) {
      console.log('Error');
      setLogin({ username: '', password: '', error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });

    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = async () => {
    await fetchData();
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={logo} alt="logo trybe" width="120" />
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleChange}
          />
          <small>
            {login.error != null && login.error}
          </small>
        </label>
        <label htmlFor="password" id="password">
          <input
            type="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
            name="password"
          />
        </label>

        <button
          type="button"
          onClick={handleSubmit}
        >
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
      </div>
    </div>
  );
}

export default Login;