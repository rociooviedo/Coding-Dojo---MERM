import React, { useReducer } from 'react';

const FormUseReducer = () => {
    const initialState = {
        firstName: {value: '', error: null},
        lastName: {value: '', error: null},
        email: {value: '', error: null},
    };
    /*const validaremail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test.email;*/
    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer (state, action) {
        let error = null;
            if ((action.type === 'firstName') && action.payload.length < 3 && action.payload.length > 0) {
                error = "El nombre ingresado no es valido.";
            }
            else if ((action.type === 'lastName') && action.payload.length < 3 && action.payload.length > 0) {
                error = "El apellido ingresado no es valido.";
            } 
            /*else if (action.type === 'email' && ! validaremail(value) && action.payload.length > 0) {
                error = "El mail ingresado no es valido";
            }*/
            else {
                error = null;
            }
            return {
                ...state,
                [action.type] : { value:action.payload, error: error}
        }
    };
    function adminForm(evento) {
        const {name, value} = evento.target
        dispatch({
            type:name,
            payload: value
        });
    }
    return (
    <>
    <form >
    <div className="mb-3">
        <label htmlFor="exampleInputNombre" className="form-label">Nombre:</label>
        <br></br>
        <input onChange={adminForm} type="text" name="firstName" className="form-control" id="exampleInputNombre" aria-describedby="emailHelp"/>
        {state.firstName.error !== null && (<p className="text-danger">{state.firstName.error}</p>)}

    </div>
    <div className="mb-3">
        <label htmlFor="exampleInpuApellido" className="form-label">Apellido:</label>
        <br></br>
        <input onChange={adminForm} type="text" name="lastName"  className="form-control" id="exampleInpuApellido" aria-describedby="emailHelp"/>
        {state.lastName.error !== null && (<p className="text-danger">{state.lastName.error}</p>)}
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
        <br></br>
        <input onChange={adminForm} type="email" name="email"  className="form-control" id="exampleInpuApellido" aria-describedby="emailHelp"/>
        {state.email.error !== null && (<p className="text-danger">{state.email.error}</p>)}
    </div>   
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
    )
}
export default FormUseReducer