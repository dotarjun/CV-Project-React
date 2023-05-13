import React, { useState } from 'react';
import Save from './save';
// import Edit from './edit';

function Contact() {
  const [Email, setEmail] = useState('');
  const [Github, setGithub] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [UserContactInfo, setUserContactInfo] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [Editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserContactInfo({
      Email,
      Github,
      LinkedIn,
    });

    setEmail('');
    setGithub('');
    setLinkedIn('');
    setSubmitted(true);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Contact</h3>
        {!Editing && submitted && (
        <button
          className="btn btn-sm"
          onClick={handleEdit}
          type="button"
        >
          Edit
        </button>
        )}
      </div>
      {!submitted || Editing ? (
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
      ) : (
        <div>
          {submitted && (
            <div>
              <p>
                Email:
                {` ${UserContactInfo.Email}`}
              </p>
              <p>
                GitHub:
                {` ${UserContactInfo.Github}`}
              </p>
              <p>
                LinkedIn:
                {` ${UserContactInfo.LinkedIn}`}
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default Contact;
