import React, { useState } from 'react';


function FormularioAlumnos() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [carrera, setCarrera] = useState("");

    function onSubmit() {
        const requestOptions = {
            method: 'POST',
            crossDomain: true,
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: {
                nombre, apellido, carrera
            }
        };
        fetch('http://localhost:3050/alumno', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return (

        <React.Fragment>
            <div className='contenedor-form'>

                <div className='formulario'>
                    <h4>Registro nuevo alumno</h4>

                    <label for='nombre'></label>
                    <input type='text' name='nombre' id='nombre' placeholder='Nombres' onChange={e => setNombre(e.target.value)}></input>

                    <label for='apellido'></label>
                    <input type='text' name='apellido' id='apellido' placeholder='Apellidos' onChange={e => setApellido(e.target.value)}></input>

                    <label for='carrera'></label>
                    <input type='text' name='carrera' id='carrera' placeholder='Carrera' onChange={e => setCarrera(e.target.value)}></input>

                    <button type='submit' value='' onClick={onSubmit}>Agregar</button>

                </div>

            </div>

        </React.Fragment>
    );
}

export default FormularioAlumnos;