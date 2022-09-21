import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Registro from "./Pages/Registro/Registro";
import Login from "./Pages/Login/Login";
import Figurita from "./Pages/Figurita/Figurita";

import "./App.css";

function App() {
  const [figuritas, setFiguritas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8088/figuritas")
      .then((response) => response.json())
      .then((data) => {
        setFiguritas(data);
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/figurita" element={<Figurita />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
