
import * as React from 'react';


import Proyects from './components/Proyects/Proyects';
import Habilities from './components/Habilities/Habilities';

export default function Home() {
  return (
    <React.Fragment>
      {/* TODO:  Change global css, implement material ui custom theme*/}
      {/* <CssBaseline /> */}


      <main >


        <div >


          <h1>Pedro A. Lopez G.</h1>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <p >Ingeniero Administrador en Sistemas</p>
          <p>
            Desarrollador web full stack en constante aprendizaje, apasionado por crear aplicaciones web robustas y eficientes.
          </p>
        </div>

        <div>
          <h3>Instereses personales</h3>
          <p>Cuando no estoy codeando me gusta tocar la guitarra electrica, mejorar mi ingles y explorar nuevas tecnologias</p>

        </div>
        <div>
          <h3>
            Objetivos</h3>
          <p>Estoy siempre en busca de nuevas oportunidades para aprender y crecer profesionalmente.</p>
          <p>me apasiona resolver problemas complejos y colaborar con otros para crear productos impactantes.</p>
        </div>

        <h3>Educacion</h3>
        <div >
          <h3>Proyectos</h3>
          <Proyects />
        </div>

        <div>
          <h3>Habilidades Tecnicas</h3>
          <Habilities />
        </div>

        <h3>Contacto</h3>

      </main>
    </React.Fragment >

  );
}
