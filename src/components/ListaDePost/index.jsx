import CardPost from './../Card/index';
import './ListaDePost.css'


export default function ListaDePost({ posts }) {
    return (
        <div className='lista__container'>
            {posts.map((post) => {
                return (
                    <CardPost
                        key={post.id}
                        titulo={post.titulo}
                        descricao={post.descricao}
                        imagem={post.imagem}
                        likes={post.likes}
                        comentarios={post.comentarios}
                        compartilhamento={post.compartilhamento}
                        autorNome={post.autorNome}
                        autorImagem={post.autorImagem}
                    />
                )
            })}
        </div>
    )
}