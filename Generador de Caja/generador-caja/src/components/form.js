import React, { useReducer } from 'react'

const initialState = {
    color: { value: '', error: '' },
    size: { value: '', error: '' },
};

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}


const BoxForm = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        // Prevenir recargar la pagina
        e.preventDefault();

        //Verificar que no haya errores
        if (state.color.error === null && state.size.error === null) {
            //Crear nueva caja, pasar datos de color y tamaño
            props.onNewBox(state.color.value, state.size.value);

            //Limpiar los campos
            dispatch({ type: 'color', payload: { value: '', error: '' }  });
            dispatch({ type: 'size', payload: { value: '', error: '' }});

        } else {
            if (state.color.error === '' || state.size.error === '') alert("Must complete all fields");
            //Si hay errores retornar y no procesar el formulario
            return;
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = "";
        //Validar el campo
        if (name === 'color') {
            error = CSS.supports('color', value) ? null : "Invalid color" ;
        } else {
            error = value > 0 ? null : "Size must be integer and positive";
        }

        //Actualizar el valor
        dispatch({type: name,payload: { value, error } });

    }


    return (
        <form name='myForm' onSubmit={handleSubmit}>

            {/* Inputs */}
            <div className="row">
                <div className='col-1'>
                    <label htmlFor='color' className="col-form-label">Color</label>
                </div>

                <div className='col-4'>
                    <input type="text"
                        className="form-control"
                        name="color"
                        onChange={handleChange}
                        value={state.color.value} />
                </div>

                <div className='col-1'>
                    <label htmlFor='size' className="col-form-label">Size</label>
                </div>

                <div className='col-4'>
                    <input type="number"
                        className="form-control"
                        name="size"
                        onChange={handleChange}
                        min='1'
                        value={state.size.value} />
                </div>
                <div className='col-2'>
                    <button type='submit' className='btn btn-outline-secondary px-4'>Add</button>
                </div>
            </div>

            {/* Error display */}
            <div className="row">
                <div className='col-4 offset-1'>
                    {state.color.error !== '' && (
                        <p className='text-danger'>{state.color.error}</p>
                    )}
                </div>

                <div className='col-4 offset-1'>
                    {state.size.error !== '' && (
                        <p className='text-danger'>{state.size.error}</p>
                    )}
                </div>
            </div>

        </form>
    )
}

export default BoxForm