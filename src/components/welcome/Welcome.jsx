import "./welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div class="hero">
      <div class="hero__sticky">
        <div class="hero__content">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-light mt-0">
            Una nueva forma de comunicarte con el mundo
          </h1>
          <p class="font-semibold tracking-wider uppercase mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi atque corporis voluptatem soluta, deserunt porro debitis at ex
            dolorem, laboriosam dolorum sunt. A nihil iste similique quam,
            necessitatibus ex!
          </p>
        </div>
      </div>
      <div class="hero__sticky2">
        <div class="hero__content2">
          <h1 class="text-2xl md:text-3xl lg:text-4xl text-center font-light mt-0">
            Conecta2
          </h1>
          <p class="font-semibold tracking-wider uppercase mb-0">
            For Mikaela && Maciel. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nihil velit voluptates ipsam, iure dolorum
            voluptatibus?
          </p>
        </div>
      </div>
      <div class="hero__sticky3">
        <div class="hero__content3">
          <Link to="login-register">
            {" "}
            <h1
              id="buttonWelcome"
              class="text-2xl md:text-3xl text-center lg:text-4xl font-light mt-0"
            >
              Registarte <br />
              Inicia sesion
            </h1>
          </Link>
          <div class="button d-flex justify-content-center mt-4">
            <a
              name=""
              id=""
              class="btn-lg btn-success text-white"
              href="#"
              role="button"
            ></a>
          </div>
        </div>
      </div>
      {/*  <a href="/login-register" class="hero__link">
        <span class="sr-only">Learn more</span>
      </a> */}
      <div class="bg-2"></div>

      <img src="/bg.png" alt="" />
    </div>
  );
};
export default Welcome;
