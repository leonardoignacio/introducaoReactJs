import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { busca } from '../../api/api';
import '../../assets/css/blog.css';

import ListaCatAdmin from './components/ListCatAdmin';

const CatAdmin = () => {
    const { id } = useParams()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])
    return (
        <>
            <div className='container'>
            <table className="tabela">
                <thead>
                    <tr>
                        <th colSpan="3" className="tabela__coluna--g">
                            SubCategoria:
                            <span className='cartao__titulo'>{id}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr> {
                        subcategorias.map((subcategoria) => (
                            <td className="tabela__coluna--m" key={subcategoria.id}>
                                {subcategoria}
                            </td>))
                    }
                        <td>
                        <Link to={`/admin/categoria/sub/form/${id}`}>                               
                         <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{ marginTop: 1 }}
                                >
                                    Editar SubCategorias
                                </Button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <ListaCatAdmin />


        </>
    )
}

export default CatAdmin