import React from "react";

import "./login.css";

const Login = () => {
  return (
    <form className="login">
      <div className="loginMail">
        <label for="email">Mail</label>
        <input type="email" />
      </div>
      <div className="loginContrasena">
        <label for="password">Contraseña</label>
        <input type="password" />
      </div>
      <button className="loginBoton" type="button">
        Entrar
      </button>
    </form>
  );
};
export default Login;
