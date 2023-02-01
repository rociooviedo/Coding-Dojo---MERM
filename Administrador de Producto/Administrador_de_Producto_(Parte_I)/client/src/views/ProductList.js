import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default props => {
    const { removeFromDom } = props;
    const deleteProducto = (productoId) => {
        axios.delete('http://localhost:8000/api/producto/' + productoId)
            .then(res => {
                removeFromDom(productoId)
            })
    }
    return (
        <div>
            {props.producto.map((producto, idx) => {
                return <p key={idx}>
                    <Link to={"/producto/" + producto._id}>
                        {producto.titulo}, {producto.precio}, {producto.descripcion}
                    </Link>
                    <button onClick={(e)=>{deleteProducto(producto._id)}}>Borrar</button>
                </p>
            })}
        </div>
    )
}

