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

    //Proceso que muestra código en formato JSX para la visualización gráfica de todos los registros del modelo asistencias en el navegador web.
    render() {
        const { datosCargados, asistencias } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Lista de Asistencias</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Estudiante</th>
                                <th>Sesión</th>
                            </tr>
                        </thead>
                    </table>
                    <Link type="button" className="btn btn-success" to={"/asistencias/crear"}>Agregar Sesión</Link>
                </div>
            </div>
        );
    }
}

export default Listar;