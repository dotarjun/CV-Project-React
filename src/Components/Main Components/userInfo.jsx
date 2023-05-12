/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function UserInfo() {
  const [Name, setName] = useState('');
  const [Position, setPosition] = useState('');
  const [Bio, setBio] = useState('');
  const [updateUserInfo, setupdateUserInfo] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [Editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setupdateUserInfo({
      Name,
      Position,
      Bio,
    });

    setName('');
    setPosition('');
    setBio('');
    setSubmitted(true);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Personal Information</h3>
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
        <form
          className="flex flex-col my-6 gap-2"
          onSubmit={handleSubmit}
        >
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
            className="btn btn-block bg-base-100 hover:border-base-content hover:border-2 hover:bg-base-100 hover:border-opacity-30  text-sm "
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          {submitted && (
            <div>
              <p>
                Name:
                {` ${updateUserInfo.Name}`}
              </p>
              <p>
                Position:
                {` ${updateUserInfo.Position}`}
              </p>
              <p>
                Bio:
                {` ${updateUserInfo.Bio}`}
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

export default UserInfo;
