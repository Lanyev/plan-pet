import React from "react";

const CreateUser = () => {
  return (
    <form className="create-user-form">
      <div className="create-user-container">
        <div className="create-user-title">
          <h1 className="create-user-title-text">Nuevo Usuario</h1>
        </div>
        <div className="create-user-inputs">
          <input
            className="create-user-input"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="create-user-input"
            type="text"
            placeholder="Apellido"
          />
          <input
            className="create-user-input"
            type="text"
            placeholder="Correo electronico"
          />
          <input
            className="create-user-input"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="create-user-buttons">
          <button className="create-user-button">Crear Usuario</button>
          <button className="login-button">Inicio de sesion</button>
        </div>
      </div>
    </form>
  );
};

export default CreateUser;
