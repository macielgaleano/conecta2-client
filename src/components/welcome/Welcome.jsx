import "./welcome.css";
import { Link } from "react-router-dom";
import background from "./bg.png";

const Welcome = () => {
  return (
    <div className="hero">
      <div className="hero__sticky">
        <div className="hero__content">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mt-0">
            Una nueva forma de comunicarte con el mundo
          </h1>
          <p className="font-semibold tracking-wider uppercase mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi atque
            corporis voluptatem soluta, deserunt porro debitis at ex dolorem, laboriosam
            dolorum sunt. A nihil iste similique quam, necessitatibus ex!
          </p>
        </div>
      </div>
      <div className="hero__sticky2">
        <div className="hero__content2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-light mt-0">
            Conecta2
          </h1>
          <p className="font-semibold tracking-wider uppercase mb-0">
            For Mikaela and Maciel. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nihil velit voluptates ipsam, iure dolorum voluptatibus?
          </p>
        </div>
      </div>
      <div className="hero__sticky3">
        <div className="hero__content3">
          <Link to="login-register">
            {" "}
            <h1
              id="buttonWelcome"
              className="text-2xl md:text-3xl text-center lg:text-4xl font-light mt-0"
            >
              Registarte / <br />
              Inicia sesion
            </h1>
          </Link>
          <div className="button d-flex justify-content-center mt-4">
            <div className="btn-lg btn-success text-white" role="button"></div>
          </div>
        </div>
      </div>
      <Link to="/registro" className="hero__link">
        <span className="sr-only">Learn more</span>
      </Link>
      <div className="bg-2"></div>

      <img src={background} alt="" />
    </div>
  );
};
export default Welcome;
