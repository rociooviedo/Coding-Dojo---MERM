import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const AuthorList = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        //Get the list of the authors
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
    }, [])

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
            .then(res => {
                console.log('Deleted succesfully', res);
                removeFromDOM(id);
            })
    }

    const removeFromDOM = (id) => {
        //Update the list of the author
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <NavLink to={'/new'}>Add an author</NavLink>

            <p className='text-purple mt-3'>We have quotes by:</p>
            <table className="table table-striped border">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-purple align-middle'>{author.name}</td>
                                <td className='d-flex'>
                                    <Link to={`/edit/${author._id}`} className='btn btn-warning me-2 w-100' >Edit</Link>
                                    <button className='btn btn-danger w-100' onClick={() => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default AuthorList
