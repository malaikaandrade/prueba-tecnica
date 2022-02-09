import React, { useEffect, useState } from 'react';



function AdministracionAlumnos() {
    const [alumnos, setAlumnos] = useState([])
    useEffect(() => {
        fetch("http://localhost:3050/alumno")
            .then(response => response.json())
            .then(data => {
                setAlumnos(data.data)
            })
    }, [])
    console.log(alumnos);

    return (
        <React.Fragment>

            <h3>Administración de Alumnos</h3>
            <div className="form-nuevo-alumno">
                <form action="">
                    <input className="nuevo-alumno" type="submit" value="Nuevo Alumno" />
                </form>
            </div>

            <div className="table">
                <div className="table-header">
                    <div className="table-column Matricula"> <label for="">Matricula </label> </div>
                    <div className="table-column Nombre"><label for="">Nombre</label> </div>
                    <div className="table-column Apellido"><label for="">Apellido</label></div>
                    <div className="table-column Carrera"><label for="">Carrera </label></div>
                    <div className="table-column editar"> <label for="">Editar</label></div>
                </div>
                <div className="table-body">
                    {alumnos.map((element) => {
                        return (
                            <div className="table-row">
                                <div className="table-column Matricula"><p>{element.matricula}</p></div>
                                <div className="table-column Nombre"><p>{element.nombres}</p></div>
                                <div className="table-column Apellido"><p>{element.apellidos}</p></div>
                                <div className="table-column Carrera"><p>{element.carrera}</p></div>
                                <div className="table-column editar"></div>
                            </div>

                        )
                    })}

                </div>


            </div>

        </React.Fragment>

    );
}
export default AdministracionAlumnos;