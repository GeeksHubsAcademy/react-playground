import React from 'react';
const Person = (props) => {
    return <div>
        <span>Nombre: {props.name},</span>
        <span>Apellido: {props.surname},</span>
        <span>Edad: {props.age}</span>
    </div>

}

export default Person;