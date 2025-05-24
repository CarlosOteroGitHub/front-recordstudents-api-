import React from "react";
import { Link } from 'react-router-dom';
import Api from "../../shared/constants";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            fecha: "",
            responsable: "",
        }
    }

    cambioValor = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Función que inserta un registro del modelo estudiantes.
    enviarDatos = (e) => {
        e.preventDefault();
        const { nombre, fecha, responsable } = this.state;

        var datosEnviar = { nombre: nombre, fecha: fecha, responsable: responsable };

        fetch(Api + "/sesiones", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosEnviar)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
                this.props.history.push("/sesiones");
            })
            .catch(console.log)
    }

    //Proceso que muestra código en formato JSX para la visualización gráfica del formulario de inserción en el navegador web.
    render() {
        const { nombre, fecha, responsable } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Agregar Sesión</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>
                        <div className="form-group">
                            <strong><label htmlFor="nombre">Nombre*</label></strong>
                            <input type="text" name="nombre" id="nombre" onChange={this.cambioValor} value={nombre} className="form-control" aria-describedby="helpId" />
                            <br></br>
                        </div>
                        <div className="form-group">
                            <strong><label htmlFor="fecha">Fecha*</label></strong>
                            <input type="date" name="fecha" id="fecha" value={fecha} onChange={this.cambioValor} className="form-control" aria-describedby="helpId" />
                            <br></br>
                        </div>
                        <div className="form-group">
                            <strong><label htmlFor="responsable">Responsable*</label></strong>
                            <input type="text" name="responsable" id="responsable" value={responsable} onChange={this.cambioValor} className="form-control" aria-describedby="helpId" />
                            <br></br>
                        </div>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-info">Agregar</button>
                            <Link to={"/sesiones"} className="btn btn-danger">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Crear;