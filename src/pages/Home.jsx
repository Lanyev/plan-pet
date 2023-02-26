import React from "react";
import Login from "../components/Login";
import "../styles/Home.css";

const Home = () => {
  const [showModalLogin, setShowModalLogin] = React.useState(false);
  return (
    <main className="main">
      <div className="header">
        <div className="logo-container">
          <h1 className="logo-title">PlanPet</h1>
        </div>
        <div className="button-container">
          <button
            className="login-button"
            onClick={() => setShowModalLogin(true)}
          >
            Inicio de sesion
          </button>
          <button className="register-button">Nuevo Usuario</button>
        </div>
      </div>
      <div className="image-container">
        <img className="logo-image" src="public/img/logo.png" alt="logo" />
      </div>
      {showModalLogin && <Login setShowModalLogin={setShowModalLogin} />}
    </main>
  );
};

export default Home;
