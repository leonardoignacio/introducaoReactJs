import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // A URL padrão do json-server é http://localhost:3001
    axios.get('http://localhost:3001/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os posts:', error);
      });
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  return (
    <div className="app">
      <h1 className="title">Blog de Artigos Pet</h1>
      <div className="postGrid">
        {posts.map(post => (
          <div key={post.id} className="postCard">
            <h2>{post.title}</h2>
            <p>{post.metadescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;