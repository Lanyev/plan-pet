import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ setShowModalLogin }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModalLogin(false);
    }, 200);
  };

  return (
    <form className={`modal-content ${closing && "modal-content--closing"}`}>
      <div className="modal-content__container">
        <div className="modal-content__title">
          <h1 className="modal-content__title-text">Inicio de sesión</h1>
        </div>
        <div className="modal-content__inputs">
          <input
            className="modal-content__input"
            type="text"
            placeholder="Correo electrónico"
          />
          <input
            className="modal-content__input"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="modal-content__buttons">
          <button className="modal-content__button">Iniciar sesión</button>
        </div>
        <button className="modal-content__close-button" onClick={handleClose}>
          X
        </button>
      </div>
    </form>
  );
};

export default Login;
