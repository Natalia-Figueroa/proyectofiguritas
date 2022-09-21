import React from "react";
import { useState } from "react";

const Figurita = ({ figuritas }) => {
  const [cantidad, setCantidad] = useState(0);

  const agregarRepetida = () => {
    setCantidad(cantidad + 1);
  };
  const restarRepetida = () => {
    setCantidad((x) => {
      return x - 1;
    });
  };

  return (
    <li
      className="figurita-item"
      style={{ border: `3px solid red`, backgroundColor: `grey` }}
    >
      {figuritas.map((figura, i) => (
        <p key={i}>
          {figura.id}
          {figura.categoria}
          {figura.tengo}
        </p>
      ))}
      {cantidad === 0 ? (
        <button>Tengo</button>
      ) : (
        <>
          <button onClick={agregarRepetida}>+</button>
          <p>{cantidad}</p>
          <button onClick={restarRepetida}>-</button>
        </>
      )}
    </li>
  );
};

export default Figurita;
