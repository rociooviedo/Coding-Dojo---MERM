import React, { Component } from 'react';

class ListaTareas extends Component {
    render() {
        const {tareas} = this.props;
        
        return <>
            <h2>Things I need to do:  -- Cosas que necesito hacer:</h2>
            <ul>
                {tareas.map(item => {
                    return <li>{item}</li>;
                })}
            </ul>
        </>
    }
}
export default ListaTareas;