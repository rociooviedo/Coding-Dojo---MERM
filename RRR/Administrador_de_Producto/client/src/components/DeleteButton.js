import React from 'react'
import axios from 'axios';
export default props => {
    const { productoId, successCallback } = props;
    const deleteProducto = e => {
        axios.delete('http://localhost:8000/api/producto/' + productoId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProducto}>
            Delete
        </button>
    )
}

