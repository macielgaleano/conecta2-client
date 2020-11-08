import React, { useState } from "react";
import axios from "axios";

const LoginRegister = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form
          id="registrationForm"
          data-parsley-validate=""
          action="/registro"
          method="POST"
        >
          <h1 class="pt-4">Crear cuenta</h1>
          <div class="social-container">
            <a href="/auth/facebook" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>{" "}
          </div>
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
        <form action="/login" method="POST">
          <h1 id="inciar-sesion">Iniciar sesion</h1>
          <div class="social-container">
            <a href="/auth/facebook" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>{" "}
          </div>
          <span>O use su cuenta</span>
          <input
            type="text"
            name="email"
            class="form-control"
            id="email"
            placeholder="Email or Username"
          />
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />

          <button class="mt-2">Iniciar sesión</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Bienvenido!</h1>
            <p>Para conenctarse con nosotros ingresa tu datos</p>
            <button class="ghost" id="signIn">
              Iniciar sesion
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hola, bro!</h1>
            <p>Ingresa tus datos para registrarse</p>
            <button class="ghost mt-2" id="signUp">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginRegister;
