import BarraPesquisa from "../BarraPesquisa";
import Filtros from "../Filtros";
import Sidebar from "../Sidebar";
import './Header.css'
export default function Header() {
    return (
        <header>
            <div className="container">
                <Sidebar />
                <div>
                    <BarraPesquisa />
                    <Filtros />
                </div>
            </div>
        </header>
    )
}