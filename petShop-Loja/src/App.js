import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import NavAdmin from './paginas/admin/components/NavAdmin';

// Admin
import Admin from './paginas/admin/Admin';
import FormCategoria from './paginas/admin/components/FormCategoria';
import CatAdmin from './paginas/admin/CatAdmin';
import FormSubCategoria from './paginas/admin/components/FormSubCategoria';
import PostAdmin from './paginas/admin/PostAdmin';
import FormPost from './paginas/admin/components/FormPost';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />
        <Route path="/posts/:id" element={<Post />} />

        {/* Rotas administrativas */}
        <Route path="/admin/" element={<NavAdmin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/NovaCategoria" element={<FormCategoria />} />
        <Route path="/admin/categoria/:id" element={<FormCategoria />} />
        <Route path="/admin/posts/NovoPost" element={<FormPost />} />
        <Route path="/admin/posts/:id" element={<FormPost />} />
        <Route path="/admin/categoria/list" element={<CatAdmin />} />
        <Route path="/admin/posts/list" element={<PostAdmin />} />
        <Route path="/admin/categoria/sub/:id" element={<CatAdmin />} />
        <Route path="/admin/categoria/sub/form/:id" element={<FormSubCategoria />} />
        


        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );
}

export default App;
