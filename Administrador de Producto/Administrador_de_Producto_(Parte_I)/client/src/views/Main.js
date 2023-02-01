import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [producto, setProducto] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/producto')
            .then(res=>{
                setProducto(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = productoId => {
        setProducto(producto.filter(producto => producto._id !== productoId));
    }
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList producto={producto} removeFromDom={removeFromDom}/>}
        </div>
    )
}