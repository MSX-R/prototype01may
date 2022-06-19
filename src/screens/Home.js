import React from "react";
import "./Home.css";
import logo from "../assets/logo2.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="site">
      <Navbar />

      <div className="page" >
        {/* Page1 */}
        <div className="souspage" id="home">
        <img src={logo} alt="logo hotdog" class="logo-hotdog" />
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>

        
        </div>

{/* PAGE 2 */}
<div className="souspage" id="quefaire">
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>

        
        </div>
        {/* PAGE 3 */}
<div className="souspage" id="tarifs">
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>

        
        </div>

        {/* PAGE 3 */}
<div className="souspage" id="contact">
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>

        
        </div>
      
{/* FIN PAGE GENERAL */}
      </div>




      {/* <div className="page" id="what">
        <img src={logo} alt="logo hotdog" class="logo-hotdog" />
        <h1>Découvrez The HOT'D COMPANY</h1>
        <p className="sous-titre">
          " Le seul endroit où vous mangerez des Hots Dogs de qualité "
        </p>
        <a href="" className="btn-accueil">
          En savoir plus
        </a>
      </div> */}
    </div>
  );
};

export default Home;
