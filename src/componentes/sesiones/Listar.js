import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../../shared/constants";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            sesiones: []
        }
    }

    //Función que consulta todos los registros del modelo de sesiones.
    cargarDatos() {
        fetch(Api + "/sesiones")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.setState({ datosCargados: true, sesiones: datosRespuesta })
            })
            .catch(console.log)
    }

    //Función que se invoca inmediatamente, la cual ejecuta el método "cargarDatos"
    componentDidMount() {
        this.cargarDatos();
    }

    //Proceso que muestra código en formato JSX para la visualización gráfica de todos los registros del modelo sesiones en el navegador web.
    render() {
        const { sesiones } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Lista de Sesiones</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Responsable</th>
                                <th>Creado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sesiones.map(
                                (sesion) => (
                                    <tr>
                                        <td>{sesion.id}</td>
                                        <td>{sesion.nombre}</td>
                                        <td>{sesion.fecha}</td>
                                        <td>{sesion.responsable}</td>
                                        <td>{sesion.created_at}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <Link type="button" className="btn btn-success" to={"/sesiones/crear"}>Agregar Sesión</Link>
                </div>
            </div>
        );
    }
}

export default Listar;