import Logo from './assets/logo-corderspace.svg'

import './sidebar.css'
import { MdFeed } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BsExclamationOctagon } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt="Logo do CoderSpace" className='logo' />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href="#" className='item__link item__link--ativo'>
                            <MdFeed />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <CgProfile />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                             <BsExclamationOctagon />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <IoLogOutOutline />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}