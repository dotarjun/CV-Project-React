import React from 'react';
import UserInfo from './Main Components/userInfo';
import Contact from './Main Components/contact';
import Experience from './Main Components/experience';
// import WorkExp, { ToDate } from './Main Components/workExp';
// import Projects from './Main Components/projects';
// import Skills from './Main Components/skills';
// import Save from './save';

export default function Main() {
  // const [InputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    // console.log(ToDate);
  };

  return (
    <main className="bg-neutral min-w-full min-h-full prose">
      <form className="mx-8" onSubmit={handleSubmit}>
        <UserInfo />
        <Experience />
        <Contact />

        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Save /> */}
        <button type="submit" className="btn btn-accent btn-block my-4">Submit</button>
      </form>
    </main>
  );
}
