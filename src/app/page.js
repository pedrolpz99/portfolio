
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Proyects from './components/Proyects/Proyects';
import Habilities from './components/Habilities/Habilities';

export default function Home() {
  return (
    <React.Fragment>
      {/* TODO:  Change global css, implement material ui custom theme*/}
      {/* <CssBaseline /> */}
      <Container maxWidth="lg" >

        <main >


          <Box sx={{ height: '100vh' }} >
            <h2>
              Acerca de mi
            </h2>
            <p>Desarrollador web en constante aprendizaje</p>
            <p>
              Hola, Soy Pedro Lopez, desarrollador full stack apasiionado por crear aplicaciones web robustas y eficientes.
            </p>
          </Box>
          <Box sx={{ height: '100vh' }}>
            <h3>Instereses personales</h3>
            <p>Cuando no estoy codeando me gusta tocar la guitarra electrica, mejorar mi ingles y explorar nuevas tecnologias</p>

          </Box>
          <Box sx={{ height: '100vh' }}>
            <h3>
              Objetivos</h3>
            <p>Estoy siempre en busca de nuevas oportunidades para aprender y crecer profesionalmente.</p>
            <p>me apasiona resolver problemas complejos y colaborar con otros para crear productos impactantes.</p>
          </Box>

          <h3>Educacion</h3>
          <Box sx={{ height: '100vh' }}>
            <h3>Proyectos</h3>
            <Proyects />
          </Box>

          <Box sx={{ height: '100vh' }}>
            <h3>Habilidades Tecnicas</h3>
            <Habilities />
          </Box>

          <h3>Contacto</h3>

        </main>
      </Container>
    </React.Fragment>

  );
}
