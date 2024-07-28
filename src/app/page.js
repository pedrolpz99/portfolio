
import * as React from 'react';

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <h2>
          Acerca de mi
        </h2>
        <p>Desarrollador web en constante aprendizaje</p>
        <p>
          Hola, Soy Pedro Lopez, desarrollador full stack apasiionado por crear aplicaciones web robustas y eficientes.
        </p>
        <h3>Instereses personales</h3>
        <p>Cuando no estoy codeando me gusta tocar la guitarra electrica, mejorar mi ingles y explorar nuevas tecnologias</p>
        <h3>
          Objetivos</h3>
        <p>Estoy siempre en busca de nuevas oportunidades para aprender y crecer profesionalmente.</p>
        <p>me apasiona resolver problemas complejos y colaborar con otros para crear productos impactantes.</p>
        <h3>Educacion</h3>
        <h3>Proyectos</h3>
        <h3>Tecnologias</h3>
        <h3>Contacto</h3>
      </div>
    </main>
  );
}
