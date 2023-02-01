import React, { useState } from 'react'
import axios from 'axios';
export default props => {
    // mantener el control de lo que se escribe a través del gancho useState
    const { initialTitulo, initialPrecio, initialDescripcion, onSubmitProp } = props;
    const [titulo, setTitulo] = useState(initialTitulo); 
    const [precio, setPrecio] = useState(initialPrecio);
    const [descripcion, setDescripcion] = useState(initialDescripcion);
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        onSubmitProp({titulo, precio, descripcion});
    }
    //onChange para actualizar titulo precio y la descripcion
    return (
        <form className='text-center my-5 mx-auto' onSubmit={onSubmitHandler} style={{ width: '350px' }}>
            <p>
                <label>Titulo</label><br/>
                <input type="text" name="titulo" onChange = {(e)=>setTitulo(e.target.value)} value={titulo}/>
            </p>
            <p>
                <label>Precio</label><br/>
                <input type="number" name="precio" onChange = {(e)=>setPrecio(e.target.value)} value={precio}/>
            </p>
            <p>
                <label>Descripcion</label><br/>
                <input type="text" name="descripcion" onChange = {(e)=>setDescripcion(e.target.value)} value={descripcion}/>
            </p>
            <input type="submit"/>
        </form>
    )
}