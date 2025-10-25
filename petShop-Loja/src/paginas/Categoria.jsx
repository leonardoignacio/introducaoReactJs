import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useParams, useMatch, Link, Routes } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';

import ListaCategorias from '../components/ListaCategorias';
import SubCategoria from '../paginas/SubCategoria'
import ListaPost from '../components/ListaPost';

const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useMatch()
    const [subcategorias, setSubCategorias] = useState([])
  
    useEffect(() => {
      busca(`/categorias/${id}`, (categoria) => {
        setSubCategorias(categoria.subcategorias)
      })
    }, [id])
    return(
        <Router>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                subcategorias.map((subcategoria) => (
                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
                ))
                }
            </ul>
            <Routes>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Routes>
        </ Router>
    )
}

export default Categoria