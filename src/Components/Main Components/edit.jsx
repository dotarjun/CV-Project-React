import React from 'react';

// eslint-disable-next-line react/prop-types
function Edit({ handleEdit }) {
  return (
    <button
      className="btn btn-sm"
      // eslint-disable-next-line no-undef
      onClick={handleEdit}
      type="button"
    >
      Edit
    </button>
  );
}

export default Edit;
