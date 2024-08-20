import './card.css'
import { FaCode, FaShareAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function CardPost( {titulo, descricao, imagem, likes, comentarios, compartilhamento, autorNome, autorImagem } ) {
    return (
        <article className='card'>
            <div className='card__imagem'>
                <img className='imagem__post' src={imagem} alt="" />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                </div>

                <div className='conteudo__rodape'>
                    <div className='container__rodape'>
                        <div>
                            <ul className='container__lista'>
                                <li className='itens__lista'>
                                    <FaCode />
                                    <span>{likes}</span>
                                </li>
                                <li className='itens__lista'>
                                    <FaShareAlt />
                                    <span>{comentarios}</span>
                                </li>
                                <li className='itens__lista'>
                                    <BiCommentDetail />
                                    <span>{compartilhamento}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='usuario__rodape'>
                            <img className='icones__rodape' src={autorImagem} alt="" />
                            <span>{autorNome}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}