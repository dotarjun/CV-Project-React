/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ReactComponent as SaveIcon } from '../../Assets/save.svg';

function UserInfo() {
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [Bio, setBio] = useState('');

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Personal Information</h3>
        <SaveIcon className=" w-9 h-9 fill-accent shadow-inner shadow-slate-700 cursor-pointer" />
      </div>
      <div className="flex flex-col my-6 gap-2">
        <input
          placeholder="Name"
          className="input input-lg"
          onSubmit={(e) => (setName(e.target.value))}
        />
        <input
          placeholder="Position"
          className="input input-lg"
          onSubmit={(e) => (setPosition(e.target.value))}
        />
        <textarea
          className="textarea textarea-lg my-2"
          name="bio"
          placeholder="Bio"
          onSubmit={(e) => (setBio(e.target.value))}
        />
      </div>
    </div>
  );
}

export default UserInfo;
