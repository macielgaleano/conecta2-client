import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/userAction";
import "./loginRegister.css";

import axios from "axios";

const LoginRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    const user = { userEmail: userEmail, password: password };
    axios.post("http://localhost:8000/login", user).then((res) => {
      dispatch(actions.logged(res.data));
      history.push("/");
    });
  }
  return (
    <div class="center-container">
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form
            id="registrationForm"
            data-parsley-validate=""
            action="/registro"
          >
            <h1 class="pt-4">Crear cuenta</h1>

            <span>O use su email para registrarse</span>

            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Nombre"
              data-parsley-length="[4, 20]"
              required=""
            />
            <input
              type="text"
              class="form-control"
              id="lastname"
              name="lastname"
              placeholder="Apellido"
              data-parsley-length="[4, 20]"
              required=""
            />
            <input
              type="text"
              name="username"
              class="form-control"
              id="username"
              placeholder="Nombre de Usuario "
              data-parsley-length="[4, 20]"
              required=""
            />
            <input
              type="text"
              name="email"
              class="form-control"
              id="email"
              placeholder="Email"
              data-parsley-trigger="change"
              required=""
            />
            <input
              type="password"
              name="password"
              class="form-control"
              id="password"
              placeholder="Contraseña"
              data-parsley-minlength="8"
              required=""
            />

            <button
              type="submit"
              name="submitinfo"
              id="submitsignup"
              alt="Sign Up Now"
              class="mb-1 mt-2"
            >
              Registrarse
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="/login" onSubmit={(e) => handleLogin(e)}>
            <h1 id="inciar-sesion">Iniciar sesion</h1>

            <input
              type="text"
              name="email"
              class="form-control"
              id="email"
              placeholder="Email or Username"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              class="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button class="mt-2">Iniciar sesión</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Bienvenido!</h1>
              <p>Para conenctarse con nosotros ingresa tu datos</p>
              <button class="ghost" type="submit" id="signIn">
                Iniciar sesion
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hola, bro!</h1>
              <p>Ingresa tus datos para registrarse</p>
              <button type="submit" class="ghost mt-2" id="signUp">
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
