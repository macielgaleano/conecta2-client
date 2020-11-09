import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitsignup(e) {
    e.preventDefault();
    const user = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    };
    axios.post("https://conecta2-server.vercel.app/users", user).then((res) => {
      history.push("/registro");
    });
  }

  return (
    <div>
      <form id="registrationForm">
        <h1 className="pt-4">Crear cuenta</h1>
        <span>O use su email para registrarse</span>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Apellido"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={submitsignup} className="mb-1 mt-2">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
