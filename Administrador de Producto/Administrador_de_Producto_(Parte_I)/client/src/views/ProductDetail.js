
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [producto, setProducto] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/producto/" + props.id)
            .then(res => setProducto({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Titulo: {producto.titulo}</p>
            <p>Precio: {producto.precio}</p>
            <p>Descripcion: {producto.descripcion}</p>
        </div>
    )
}

