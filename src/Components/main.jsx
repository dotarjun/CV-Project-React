import React from 'react';
import UserInfo from './Main Components/userInfo';
import Contact from './Main Components/contact';
import Experience from './Main Components/experience';
import Projects from './Main Components/projects';
import Skills from './Main Components/skills';

export default function Main() {
  return (
    <main className="bg-neutral min-w-full min-h-full prose">
      <UserInfo />
      <Contact />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
