import './Post.css';
import style from './post.module.css';

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/SobreMim/NaoEncontrado';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <h1><NaoEncontrada/></h1>
    }

    const postRecomendaos = posts
    .filter((post)=> post.id !== Number(parametros.id))
    .sort((a,b)=> b.id - a.id) 
    .slice(0,4)
    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element ={
                        <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={style.tituloOutrosPosts}>Outros posts que você pode gostar</h2>

                        <ul className={style.postsRecomendados}>
                            {postRecomendaos.map((post)=> (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
                            }>
                </Route>
            </Route>
        </Routes>
    )
}