/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function UserInfo() {
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [Bio, setBio] = useState('');
  const [updateUserInfo, setupdateUserInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setupdateUserInfo({
      Name,
      Position,
      Bio,
    });
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Personal Information</h3>
      </div>
      <form className="flex flex-col my-6 gap-2" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="input input-lg"
          value={Name}
          onChange={(e) => (setName(e.target.value))}
          required
        />
        <input
          placeholder="Position"
          className="input input-lg"
          value={Position}
          onChange={(e) => (setPosition(e.target.value))}
          required
        />
        <textarea
          className="textarea textarea-lg my-2"
          name="bio"
          placeholder="About you"
          value={Bio}
          onChange={(e) => (setBio(e.target.value))}
          required
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

export default UserInfo;
