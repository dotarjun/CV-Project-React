import React, { useState } from 'react';
import Save from './save';

function Contact() {
  const [Email, setEmail] = useState('');
  const [Github, setGithub] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [UserContactInfo, setUserContactInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserContactInfo({
      Email,
      Github,
      LinkedIn,
    });
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Contact</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl" />
      </div>
      <form className="flex flex-col my-6 gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="input input-lg"
          value={Email}
          onChange={(e) => (setEmail(e.target.value))}
        />
        <input
          type="text"
          placeholder="GitHub"
          className="input input-lg"
          value={Github}
          onChange={(e) => (setGithub(e.target.value))}
        />
        <input
          type="text"
          placeholder="LinkedIn"
          className="input input-lg"
          value={LinkedIn}
          onChange={(e) => (setLinkedIn(e.target.value))}
        />
        <Save />
      </form>
    </div>
  );
}

export default Contact;
