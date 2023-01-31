
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default props => {
    const { id } = useParams();
    const [producto, setProducto] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/producto/" + id)
            .then(res => setProducto({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Titulo: {producto.titulo}</p>
            <p>Precio: {producto.precio}</p>
            <p>Descripcion: {producto.descripcion}</p>
            <a className='btn btn-outline-secondary' href="/">Go Back</a>
        </div>
    )
}

