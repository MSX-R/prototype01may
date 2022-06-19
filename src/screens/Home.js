import React from "react";
import "./Home.css";
import logo from "../assets/logo2.png";

const Home = () => {
  return (
    <div>
    

      <div className="accueil" id="home">
        <img src={logo} alt="logo hotdog" class="logo-hotdog" />
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>
      </div>

      <div className="accueil" id="what">
        <img src={logo} alt="logo hotdog" class="logo-hotdog" />
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Home;
