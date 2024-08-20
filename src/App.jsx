import { useEffect, useState } from 'react'
import './App.css'
import BarraPesquisa from './components/BarraPesquisa'
import CardPost from './components/Card'
import Filtros from './components/Filtros'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar'
import ListaDePost from './components/ListaDePost'


function App() {
  const [dados, setDados] = useState([])

  // fetch dados do API
  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => setDados(data))
  }, [])


  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraPesquisa />
        <Filtros />
        <Ordenacao />
        <ListaDePost posts={dados} />

      </div>
    </div>
  )
}

export default App
