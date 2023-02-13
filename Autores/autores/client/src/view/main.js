import React, {  useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthorList from '../components/autoresList'
import Update from './updates'
import AuthorForm from '../components/autoresForm'

const Main = () => {

    const [errors, setErrors] = useState({});


    const create = (serie) => {
        axios.post('http://localhost:8000/api/authors/new/', serie)
            .then(res => {
                //Para que entre aca, en el controlador debe de estar res.json
                console.log("Created succesfully", res);
                //Vaciar errores
                setErrors({});
            })
            .catch(err => {
                console.log("Error creating", err);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <div style={{ width: '400px' }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AuthorList />} />
                    <Route path='/new' element={<AuthorForm type={"create"} onSubmitProp={create} errors={errors} initialName={{name:""}} />} />
                    <Route path='/edit/:id' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main