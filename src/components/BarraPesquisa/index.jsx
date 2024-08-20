import { useState } from 'react'
import './BarraPesquisa.css'

export default function BarraPesquisa(){
    const [termoPesquisa, setTermoPesquisa] = useState('')
    
    return (
        <input 
            className='barra-pesquisa' 
            type="search" 
            placeholder="Digite o que você procura" 
            value={termoPesquisa}
            onChange={(event) => setTermoPesquisa(event.target.value)}
            //onBlur={(event) => setTermoPesquisa(event.target.value)}
        />
    )
}