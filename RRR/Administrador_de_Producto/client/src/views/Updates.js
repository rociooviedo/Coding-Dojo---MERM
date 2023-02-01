import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
export default props => {
    const { id } = props;
    const [producto, setProducto] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/producto/' + id)
            .then(res => {
                setProducto(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProducto = producto => {
        axios.put('http:/localhost:8000/api/producto/' + id, producto)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProducto}
                        initialTitulo = {producto.titulo}
                        initialPrecio = {producto.precio}
                        initialDescripcion = {producto.descripcion}
                    />
                    <DeleteButton productoId={producto._id} successCallback={() => props.history.push("/producto")} />
                </>
            )}
        </div>
    )
}
