import { useState } from 'react'
import './Filtros.css'
export default function Filtros(){

    const filtrosDoProjeto = [
        'Front-End',
        'React',
        'Acessibilidade'
        
    ]

    const [filtro, setFiltro] = useState(filtrosDoProjeto)

    function LimparFiltro() {
        setFiltro([])
    }

    return (
        <section className="container-filtro">
            <ul className='container-lista'>
                {filtro.map((filtro) => {
                    return <li key={filtro} className='itens-list'>{filtro}</li>
                })}
            </ul>
            <button onClick={LimparFiltro} className='botaoLimpar'>Limpar tudo</button>
        </section>
    )
}