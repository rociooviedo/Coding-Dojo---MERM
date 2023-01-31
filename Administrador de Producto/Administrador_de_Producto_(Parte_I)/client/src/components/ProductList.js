import React from 'react'
import axios from 'axios';
export default props => {
    return (
        <div>
            <h3>All Products:</h3>
            {props.producto.map((producto, idx)=>{
                return <p key={idx}>{producto.titulo}, {producto.precio}, {producto.descripcion}</p>
            })}
        </div>
    )
}
