
import * as React from 'react';


import Proyects from './components/Proyects/Proyects';
import Habilities from './components/Habilities/Habilities';
import Contact from "./components/Contact/ContactForm"
export default function Home() {
  return (

    <main className="min-h-screen p-24">
      <div className='flex flex-row space-x-4 justify-center items-center' >
        <div >
          <h1 className="text-5xl W-0 font-bold 
           pb-2">Pedro A. Lopez Garcia</h1>
          <span className='font-bold '>Ingeniero Administrador en Sistemas</span>
          <p className='w-50 pt-3'>
            Desarrollador web full stack en constante aprendizaje, apasionado por crear aplicaciones web robustas y eficientes.
          </p>
        </div>
        <div >

          <img className="inline-block   w-40 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>

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

      <Contact />
    </main>
  );
}


