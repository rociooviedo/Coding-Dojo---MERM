import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const AuthorForm = (props) => {

    const { type, onSubmitProp, errors, initialName } = props;
    const [name, setName] = useState(initialName);


    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmitProp({ name });
        setName(initialName);
        // Navigate() todo agregar redireccion
    }
    const handleOnChange = (e) => {
        console.log(e.target.value, "ESTO TRATAMOS DE SETEAR")
        setName({
            ...name,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='mt-3'>
            <h1>Favorite authors</h1>
            <NavLink to={'/'} >Home</NavLink>
            <p className='text-purple mt-3'>
                {type === 'create' ? 'Add a new author' : 'Edit this author'}
            </p>
            <form onSubmit={onSubmitHandler} className='border border-secondary p-3 col-8' >
            <div>
                <label htmlFor="name">Author Name : </label>
                <input type="text"  onChange={handleOnChange} name='name' value={name.name} />
                {/* <input onChange={(e) => setName({
            ...name,
            [e.target.name] : e.target.value
        })} 
        type="text" name='name' value={name.name} /> */}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
    /*return (
        
        <div className='mt-3'>
            <h1>Favorite authors</h1>
            <NavLink to={'/'} >Home</NavLink>
            <p className='text-purple mt-3'>
                {type === 'create' ? 'Add a new author' : 'Edit this author'}
            </p>
            <form onSubmit={onSubmitHandler} className='border border-secondary p-3 col-8'>
                <label className='form-label'>Name</label>
                <input type="text" className='form-control mb-2' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name ? <p className='text-danger'>{errors.name.message}</p> : null}
                <div className='d-flex' >
                    <Link to={'/'} className='btn btn-blue fs-5 w-100 me-2'>Cancel</Link>
                    <input type="submit" className='btn btn-blue fs-5 w-100' value={'Submit'} />
                </div>
            </form>
        </div>
    )*/
}

export default AuthorForm