import React from 'react';

function UserInfo() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Personal Information</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl" />
      </div>
      <div className="flex flex-col my-6 gap-2">
        <input
          placeholder="Name"
          className="input input-lg"
        />
        <input
          placeholder="Position"
          className="input input-lg"
        />
        <textarea className="textarea textarea-lg my-2" name="description" placeholder="Description" />
      </div>
    </div>
  );
}

export default UserInfo;
