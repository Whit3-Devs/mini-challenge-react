import { Link } from "react-router-dom";
import logoabwhite from "../assets/images/logoabwhite.png";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a
          href="https://www.linkedin.com/in/blanco-augusto-r/"
          target="_blank"
          rel="noreferrer"
          className="navbar-brand"
        >
          <img
            src={logoabwhite}
            alt="Logo de Augusto Blanco"
            width={45}
            height={30}
          />
        </a>
        <div>
          <Link to="/" className="navbar-brand">
            Inicio
          </Link>
          <Link to="/create" className="navbar-brand">
            Crear Usuario
          </Link>
        </div>
      </div>
    </nav>
  );
};
