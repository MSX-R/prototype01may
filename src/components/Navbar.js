import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import {FaHotdog} from 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenSize(window.innerWidth);

      if (window.innerWidth > 500) {
        // Le menu se ferme a chaque fois que l ecran passe au dessus de 500px
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(showMenu || screenSize > 500) && ( //shortcircuit operator + rapide que ternaire
        <ul className="liste">
          {/* <li className="items">The Hot'D Company</li>
          <li className="items">Our Hot'Doggies</li>
          <li className="items">Your order !</li>
          <li className="items">Contact</li> */}
          <li className="items">
            <a href="#home"> Accueil</a>
          </li>
          <li className="items">
            <a href="#quefaire">Que faire ?</a>
          </li>
          <li className="items">
            <a href="#tarifs">Tarifs</a>
          </li>
          <li className="items">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}

      <button onClick={toggle} className="btn">
        BTN
      </button>
    </nav>
  );
};

export default Navbar;
