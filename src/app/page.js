
import * as React from 'react';


import Proyects from './components/Proyects/Proyects';
import Contact from "./components/Contact/Contact"
import Avatar from "./components/Avatar/Avatar"
export default function Home() {
  return (

    <main >
      <div className="min-h-screen flex flex-col px-5 ">
        <Avatar />
        <Proyects />
        <Contact />
      </div>
    </main >

  );
}


