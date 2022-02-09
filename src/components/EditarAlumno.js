import React from 'react';


function EditarAlumno() {
    return (
        <React.Fragment>
            <div className='contenedor-form'>
                <form action='' method=''>
                    <div className='formulario'>
                        <h4>Editar Alumno</h4>
                        <label for='matricula'></label>
                        <input type='text' name='matricula' id='matricula' placeholder='Matricula'></input>

                        <label for='nombre'></label>
                        <input type='text' name='nombre' id='nombre' placeholder='Nombres'></input>

                        <label for='apellido'></label>
                        <input type='text' name='apellido' id='apellido' placeholder='Apellidos'></input>

                        <label for='carrera'></label>
                        <input type='text' name='carrera' id='carrera' placeholder='Carrera'></input>

                        <button type='submit' value=''>Editar</button>
                        <button type='submit' value=''>Eliminar</button>
                    </div>
                </form>
            </div>
            
        </React.Fragment>
    );
}
    
export default EditarAlumno;