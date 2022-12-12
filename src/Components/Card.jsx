import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes";


const Card = ({ name, username, id }) => {

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
    <Link to={`${routes.detail.path}/${id}`} >
        <img src="./images/doctor.jpg" alt={username} />
        <h3>{name}</h3>
        <p>{username}, id:{id}</p>


    </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          
        </span>
          {`${!isFav ? "Add to fav" : "Remove from fav"}`}
          </button>
    

    </div>
  );
};

export default Card;
