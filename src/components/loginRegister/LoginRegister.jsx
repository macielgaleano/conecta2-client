import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionLogin from "../../redux/actions/actionLogin";
import "./loginRegister.css";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const LoginRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [container, setContainer] = useState("container_login");

  let singUp = () => {
    setContainer("container_login right-panel-active ");
  };
  let signIn = () => {
    setContainer("container_login");
  };

  async function handleLogin(e) {
    e.preventDefault();
    const user = { userEmail: userEmail, password: password };

    axios.post("https://conecta2-server.vercel.app/login", user).then((res) => {
      axios
        .get("https://conecta2-server.vercel.app/users/" + userEmail)
        .then((resUser) => {
          dispatch(actionLogin(res.data, resUser.data));
          history.push("/");
        });
    });
  }
  return (
    <div className="center-container">
      <div className={container} id="container_login">
        <div className="form-container sign-up-container">
          <Register></Register>
        </div>
        <div className="form-container sign-in-container">
          <form
            className="loginForm d-flex flex-column align-items-center"
            onSubmit={(e) => handleLogin(e)}
          >
            <h1 id="inciar-sesion">Iniciar sesion</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Email or Username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-2">Iniciar sesión</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bienvenido!</h1>
              <p>Para conenctarse con nosotros ingresa tu datos</p>
              <button className="ghost" type="submit" id="signIn" onClick={signIn}>
                Iniciar sesion
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola, bro!</h1>
              <p>Ingresa tus datos para registrarse</p>
              <button type="submit" className="ghost mt-2" onClick={singUp}>
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginRegister;
