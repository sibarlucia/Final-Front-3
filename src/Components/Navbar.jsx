import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Routes/Contact'
import Favs from '../Routes/Favs'
import Home from '../Routes/Home'
import { routes } from '../Routes'
import { useEstadosGlobalesContext, useGlobalContext } from './utils/global.context'
import ChangeThemeButton from './utils/ChangeThemeButton'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {home, contact, favs, detail} = routes
  // const { theme, dispatchTheme } = useEstadosGlobalesContext();

  const handleTheme = () => {
    // dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav>
      <span><img src='./DH.ico' />  Odonto</span>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={home.path} >Home</Link>
      <Link to={contact.path} >Contact</Link>
      <Link to={favs.path} >Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <ChangeThemeButton  onClick={handleTheme}/>
    </nav>
  )
}

export default Navbar