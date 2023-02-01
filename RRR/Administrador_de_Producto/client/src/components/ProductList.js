import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import DeleteButton from '../components/DeleteButton';
export default props => {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/producto')
            .then(res => setProducto(res.data));
    }, [])
    const removeFromDom = productoId => {
        setProducto(producto.filter(producto => producto._id != productoId))
    }
    return (
        <div>
            {producto.map((producto, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/producto/" + producto._id}>
                            {producto.titulo}, {producto.precio}, {producto.descripcion}
                        </Link>
                        |
                        <Link to={"/producto/" + producto._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <DeleteButton productoId={producto._id} successCallback={()=>removeFromDom(producto._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

