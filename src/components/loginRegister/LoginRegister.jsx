import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/userAction";
import "./loginRegister.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const LoginRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [container, setContainer] = useState("container");

  let submitsignup = () => {
    setContainer(" container right-panel-active ");
  };
  let signIn = () => {
    setContainer(" container ");
  };

  async function handleLogin(e) {
    e.preventDefault();
    const user = { userEmail: userEmail, password: password };
    axios
      .post("https://conecta2-server-5zflnyzi8.vercel.app//login", user)
      .then((res) => {
        console.log(res);
        dispatch(actions.logged(res.data));
        history.push("/");
      });
  }
  return (
    <div className="center-container">
      <div className={container} id="container">
        <div className="form-container sign-up-container">
          <form id="registrationForm">
            <h1 className="pt-4">Crear cuenta</h1>

            <span>O use su email para registrarse</span>

            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nombre"
            />
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Apellido"
              data-parsley-length="[4, 20]"
              required=""
            />
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Nombre de Usuario "
              data-parsley-length="[4, 20]"
              required=""
            />
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              data-parsley-trigger="change"
              required=""
            />
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              data-parsley-minlength="8"
              required=""
            />

            <button
              type="submit"
              name="submitinfo"
              onClick={submitsignup}
              alt="Sign Up Now"
              className="mb-1 mt-2"
            >
              Registrarse
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="/login" onSubmit={(e) => handleLogin(e)}>
            <h1 id="inciar-sesion">Iniciar sesion</h1>

            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email or Username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
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
              <button type="submit" className="ghost mt-2" onClick={submitsignup}>
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
