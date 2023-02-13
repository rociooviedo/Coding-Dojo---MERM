import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import AuthorForm from '../components/autoresForm'

const Update = () => {
    const { id } = useParams();

    const [author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        console.log('use effect');
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateSerie = (author) => {
        axios.put('http://localhost:8000/api/authors/update/' + id, author)
            .then(res => {
                console.log("Update succesfully", res);
                //Si fue valido redireccionar
                navigate('/');
                //Vaciar errores
                setErrors({});
            })
            .catch(err => {
                console.log("Error update", err);
                setErrors(err.response.data.errors);
            });



    }

    return (
        <>
            {loaded ? <AuthorForm type={"update"} onSubmitProp={updateSerie} errors={errors} initialName={author.name} />
                : (
                    <>
                        <h3>We're sorry, but we couldn't find the author you're looking for. Do you want to add this author to our database?</h3>
                        <NavLink to={'/new'} className='btn btn-primary'>Create author</NavLink>
                    </>
                )}
        </>
    )
}

export default Update