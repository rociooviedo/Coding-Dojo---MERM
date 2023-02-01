import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { id } = props;
    const [titulo, setTitulo] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/producto/' + id)
            .then(res => {
                setTitulo(res.data.titulo);
                setPrecio(res.data.precio);
                setDescripcion(res.data.descripcion);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/producto/' + id, {
            titulo,
            precio,
            descripcion
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Actualizar un producto</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Titulo</label><br />
                    <input type="text" 
                    name="titulo" 
                    value={titulo} 
                    onChange={(e) => { setTitulo(e.target.value) }} />
                </p>
                <p>
                    <label>Precio</label><br />
                    <input type="number" 
                    name="precio" 
                    value={precio} 
                    onChange={(e) => { setPrecio(e.target.value) }} />
                </p>
                <p>
                    <label>Descripcion</label><br />
                    <input type="text" 
                    name="descripcion" 
                    value={descripcion} 
                    onChange={(e) => { setDescripcion(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
