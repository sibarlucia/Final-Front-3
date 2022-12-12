import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas, setDentistas] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")  
      .then(res => setDentistas(res.data))
  }, [])
  {console.log(dentistas)}

  return (
    <main className="menu" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      {dentistas.map((dentista) => <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>)}  
      </div>
      <h2 onClick={() => {window.scrollTo({top:0})}} >Ir arriba</h2>
    </main>
  )
}

export default Home