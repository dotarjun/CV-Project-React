import React from 'react';
import { ReactComponent as SaveIcon } from '../../Assets/floppy-disk-svgrepo-com.svg';

function UserInfo() {
  return (
    <div className="mx-8">
      <div className="my-3 flex flex-row justify-between items-center">
        <h3 className="text-3xl">Personal Information</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl">
          <SaveIcon className="w-8 h-8 transition duration-300 transform hover:scale-110" />
        </div>
      </div>
      <div className="flex flex-col gap-8 my-6">
        <input className="bg-slate-400 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="name" type="text" placeholder="Name" />
        <input className="bg-slate-400 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="position" type="text" placeholder="Position" />
        <textarea className="bg-slate-400 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="description" placeholder="Description" />
      </div>
    </div>
  );
}

export default UserInfo;
