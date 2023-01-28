import React, {  useState} from "react";

const Tarea = () => {
        const textStyle = {
        textDecoration: ' ',
    };
    const[lista, setLista] = useState([])
    const[input, setInput] = useState([])
    const[checkedBoxes, setCheckedBoxes] = useState([]);

    const agregarTarea = (tarea) => {
        const nuevaTarea = {
            id: Math.random(),
            tarea: tarea
        }
        setLista([...lista, nuevaTarea])
        setInput("");
    }
    const checkeds = (index, value) => {
        let copia = checkedBoxes;
        if (value) {
            copia.push(index);
        }
        else {
            copia = copia.filter(item => item !== index);
        }
        setCheckedBoxes([...copia]);
    }

    const borrarTarea = (id) => {
        const nuevaLista = lista.filter((tarea) => tarea.id !== id);
        setLista(nuevaLista);
    }
    return (
        <div>
            <ul>
                <label>Inserte su lista de tareas: <br></br></label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={() => agregarTarea (input)}>  Agregar</button> 
            </ul>
            <ul>
                {lista.map((tarea) => (
                    <li key={tarea.id}>
                        <label style={
                            checkedBoxes.includes(tarea.id)?
                            textStyle:null
                            }>{tarea.tarea}</label>
                        <input type="checkbox" onChange={(e) => checkeds(tarea.id, e.target.checked)} className="mt-2" /> 
                        <button className="btn" onClick={() => borrarTarea(tarea.id)}>Borrar</button>
                    </li>
                ))

                }
            </ul>
        </div>
    )
}


export default Tarea;