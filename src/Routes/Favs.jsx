import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = JSON.parse(localStorage.getItem("favorites")) || []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length ? (
          favs.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />

          ))
        ) : (
          <p>No tenés favoritos todavía</p>
        )}
      </div>
    </>
  );
};

export default Favs;
