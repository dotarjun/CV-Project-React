import React, { useState } from 'react';

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
  console.log(UserContactInfo);
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
        <button
          type="submit"
          className="btn btn-block bg-base-100 hover:border-base-content hover:border-2 hover:bg-base-100 hover:border-opacity-30  text-sm text-"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Contact;
