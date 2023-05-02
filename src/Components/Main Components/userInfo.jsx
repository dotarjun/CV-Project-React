import React from 'react';

function UserInfo() {
  return (
    <div>
      <h3>Personal Information</h3>

      <input name="name" type="text" placeholder="Name" />
      <input name="position" type="text" placeholder="Position" />
      <textarea name="description" placeholder="Description" />
    </div>
  );
}

export default UserInfo;
