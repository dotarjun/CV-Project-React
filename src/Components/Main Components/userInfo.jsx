import React from 'react';

function UserInfo() {
  return (
    <div className="mx-8">
      <h3 className="text-3xl my-3">Personal Information</h3>
      <div className="flex flex-col gap-6 my-6">
        <input className="bg-slate-400 opacity-80 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="name" type="text" placeholder="Name" />
        <input className="bg-slate-400 opacity-80 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="position" type="text" placeholder="Position" />
        <textarea className="bg-slate-400 opacity-80 outline-none rounded text-slate-950 p-2 placeholder:text-slate-700" name="description" placeholder="Description" />
      </div>
    </div>
  );
}

export default UserInfo;
