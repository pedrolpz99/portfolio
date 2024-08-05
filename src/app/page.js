
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Proyects from './components/Proyects/Proyects';
import Habilities from './components/Habilities/Habilities';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  return (
    <React.Fragment>
      {/* TODO:  Change global css, implement material ui custom theme*/}
      {/* <CssBaseline /> */}
      <Box sx={{
        height: '30vh',
        backgroundImage: "url('https://fastly.picsum.photos/id/866/1800/800.jpg?hmac=KOco2XSqZA9XrVsMjbC6L2Yg04WgIo7dN2E2vi2oRgc')",
        backgroundRepeat: "no-repeat",
      }}

      ></Box>
      <Container maxWidth="lg" >

        <main >


          <Box sx={{ height: '80vh' }} >

            <Avatar
              alt="Remy Sharp"
              src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
              sx={{ width: 100, height: 100 }}
            />

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
          <Box >
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
    </React.Fragment >

  );
}
