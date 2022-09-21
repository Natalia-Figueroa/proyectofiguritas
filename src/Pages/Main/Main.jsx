import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <button className="registroBoton">
        <Link to="/Registro">Registro</Link>
      </button>
      <button className="loginBoton">
        <Link to="/Login">Login</Link>
      </button>
    </div>
  );
};
export default Main;
