import React from "react";
import pokeball from "../assets/pokeball.png";
import pokeballcolor from "../assets/pokeballcolor.png";
import "./Topbar.css";

// https://pokeapi.co/api/v2/

const Topbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="pokebola"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokebola"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}> A -&gt; Z</p>
    </div>
  );
};

export default Topbar;
