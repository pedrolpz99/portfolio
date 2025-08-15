
import * as React from 'react';


import Project from './components/projects/project.jsx';
import Contact from "./components/contact/contact.jsx"
import Avatar from "./components/avatar/avatar.jsx"
export default function Home() {
  return (
    <main >
      <Avatar />
      <Project />
      <Contact />
    </main >

  );
}


