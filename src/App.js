import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

//Declaración de los documentos del componente estudiante.
import ListarEstudiantes from './componentes/estudiantes/Listar';
import CrearEstudiantes from './componentes/estudiantes/Crear';

//Declaración de los documentos del componente sesión.
import ListarSesiones from './componentes/sesiones/Listar';
import CrearSesiones from './componentes/sesiones/Crear';

//Declaración de los documentos del componente asistencia.
import ListarAsistencias from './componentes/asistencias/Listar';
import CrearAsistencias from './componentes/asistencias/Crear';

//Proceso que muestra código en formato JSX para la visualización gráfica del encabezado en el navegador web.
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/estudiantes"}><strong>Módulo de Formación</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-item nav-link active" to={"/estudiantes"}>Estudiantes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item nav-link active" to={"/sesiones"}>Sesiones</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item nav-link active" to={"/asistencias"}>Asistencias</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/estudiantes" component={ListarEstudiantes} />
        <Route path="/estudiantes/crear" component={CrearEstudiantes} />

        <Route exact path="/sesiones" component={ListarSesiones} />
        <Route path="/sesiones/crear" component={CrearSesiones} />

        <Route exact path="/asistencias" component={ListarAsistencias} />
        <Route path="/asistencias/crear" component={CrearAsistencias} />
      </div>
    </Router>
  );
}

export default App;