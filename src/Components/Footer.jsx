import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

const Footer = () => {
  // const { theme } = useEstadosGlobalesContext();
  return (
    <footer className=''>
      

      <p>Powered by</p>
       
      
      <a href="https://www.digitalhouse.com/ar" target='_blank'><img src="../images/DH.png" alt="DH-logo" /> </a>

      <span><img src="./images/ico-facebook.png" alt="facebook" /><img src="./images/ico-instagram.png" alt="instagram" /><img src="./images/ico-tiktok.png" alt="tiktok" /><img src="./images/ico-whatsapp.png" alt="whatsapp" /></span>
      
    </footer>
  );
};

export default Footer;