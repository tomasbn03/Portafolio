import './css/App.css';
import './css/BodyComponnt.css';
import './css/SobreMi.css'
import './css/Habilidades.css'
import './css/Proyectos.css'
import './css/Curriculum.css'
import './css/Footer.css'
import Component from './Component';
import ComponenteBody from './ComponenteBody'
import Proyectos from './Proyectos';
import Curriculum from './Curriculum';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            
            {/* Contenedor de la intro */}
            <div className='cont-main'>
                  <Component />
            </div>
      </header>
      {/* Contenedor del Body */}
      <div className='cont-body'>
              <ComponenteBody/>
              <Proyectos/><br></br><br></br>
              <Curriculum/><br></br>
      </div>
      <Footer/>
    </div>
    

  );
}

export default App;
