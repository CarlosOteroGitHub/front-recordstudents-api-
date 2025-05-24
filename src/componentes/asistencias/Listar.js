import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../../shared/constants";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            asistencias: []
        }
    }

    //Función que consulta todos los registros del modelo de asistencias.
    cargarDatos() {
        fetch(Api + "/asistencias")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.setState({ datosCargados: true, asistencias: datosRespuesta });
            })
            .catch(console.log)
    }

    //Función que se invoca inmediatamente, la cual ejecuta el método "cargarDatos"
    componentDidMount() {
        this.cargarDatos();
    }

    //Proceso que muestra código en formato JSX para la visualización gráfica de todos los registros del modelo asistencias en el navegador web.
    render() {
        const { asistencias } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Lista de Asistencias</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Estudiante</th>
                                <th>Sesión</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asistencias.map(
                                (asistencia) => (
                                    <tr>
                                        <td>{asistencia.estudiante.nombre}</td>
                                        <td>{asistencia.sesion.nombre}</td>
                                        <td>{asistencia.fechahora}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <Link type="button" className="btn btn-success" to={"/asistencias/crear"}>Agregar Asistencia</Link>
                </div>
            </div>
        );
    }
}

export default Listar;