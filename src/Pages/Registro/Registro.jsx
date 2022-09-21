import React from "react";

const Registro = () => {
  return (
    <form className="registro">
      <div className="registroNombre">
        <label for="name">Nombre</label>
        <input type="text" />
      </div>
      <div className="registroMail">
        <label for="email">Mail</label>
        <input type="email" />
      </div>
      <div className="registroContrasena">
        <label for="password">Constraseña</label>
        <input type="password" />
      </div>
      <button className="registroBoton" type="button">
        Entrar
      </button>
    </form>
  );
};
export default Registro;
