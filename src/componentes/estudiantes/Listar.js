import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../../shared/constants";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            estudiantes: []
        }
    }

    //Función que consulta todos los registros del modelo estudiantes en la base de datos MySQL.
    cargarDatos() {
        fetch(Api)
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                this.setState({ datosCargados: true, estudiantes: datosRespuesta })
            })
            .catch(console.log)
    }

    //Función que se invoca inmediatamente, la cual ejecuta el método "cargarDatos"
    componentDidMount() {
        this.cargarDatos();
    }

    //Proceso que muestra código en formato JSX para la visualización gráfica de todos los registros del modelo estudiantes en el navegador web.
    render() {
        const { datosCargados, estudiantes } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Lista de Estudiantes</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Nacimiento</th>
                                <th>Correo Electrónico</th>
                            </tr>
                        </thead>
                    </table>
                    <Link type="button" className="btn btn-success" to={"/estudiantes/crear"}>Agregar Estudiante</Link>
                </div>
            </div>
        );
    }
}

export default Listar;