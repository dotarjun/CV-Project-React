import React from 'react';
import { ReactComponent as SaveIcon } from '../../Assets/floppy-disk-svgrepo-com.svg';

function UserInfo() {
  return (
    <div className="mx-8">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-3xl">Personal Information</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl">
          <SaveIcon className="w-8 h-8 transition duration-300 transform hover:scale-110" />
        </div>
      </div>
      <div className="flex flex-col my-6 gap-2">
        <input className="input input-lg" name="name" type="text" placeholder="Name" />
        <input className="input input-lg" name="position" type="text" placeholder="Position" />
        <textarea className="textarea textarea-lg" name="description" placeholder="Description" />
      </div>
    </div>
  );
}

export default UserInfo;
