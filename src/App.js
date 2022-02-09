import './administracionAlumnos.css';
import AdministracionAlumnos from './components/AdministracionAlumnos';
import FormularioAlumnos from './components/FormularioAlumnos';
import EditarAlumno from './components/EditarAlumno';
import './formularioAlumnos.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* <AdministracionAlumnos /> */}
        <FormularioAlumnos />
        {/* <EditarAlumno /> */}
      </main>
    </div>
  );
}

export default App;
