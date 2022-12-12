// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { Outlet, useParams } from 'react-router-dom'
// import { getDentistas } from '../Service/publicApiService'


// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Detail = () => {
 
//   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  
//   const id = useParams()
//   console.log();
//   const [dentista, setDentista] = useState()

  
//     const dentistas = getDentistas()
//     console.log(dentistas);
    
//     dentistas.data?.find((dentista) => {
//       return dentista.id == id
//       setDentista(dentista)
//     })
  

//   return (
//     <>
    
//       <h1>Detail Dentist id </h1>
//       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
//       {dentista && (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Website</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{dentista.name}</td>
//               <td>{dentista.email}</td>
//               <td>{dentista.phone}</td>
//               <td>{dentista.website}</td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//       {!dentista && <h1>Dentist Not Found</h1>}
//       {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
//     </>
//   )
// }

// export default Detail



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  const { id } = useParams();
  const [dentistas, setDentistas] = useState([])
  const [odontologo, setOdontologo] = useState(undefined);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")  
      .then(res => setDentistas(res.data))
  }, [])
  console.log(dentistas);

  
    const o = dentistas.find((odontologo) => {
      return odontologo.id == id
    })
 
  console.log(odontologo);

  return (
    <main className=''>
      <h1>Detail Dentist id: {id} </h1>
      {o && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{o.name}</td>
              <td>{o.email}</td>
              <td>{o.phone}</td>
              <td>{o.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!o && <h1>Dentist Not Found</h1>}
    </main>
  );
};

export default Detail;