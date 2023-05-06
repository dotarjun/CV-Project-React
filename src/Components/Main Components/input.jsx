import React from 'react';

function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { placeholder, id } = props;
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const type = props.type || 'text';
  return (
    <input className="input input-lg my-2" name="name" id={id} type={type} placeholder={placeholder} />
  );
}

export default Input;
