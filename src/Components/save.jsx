import React from 'react';
import { ReactComponent as SaveIcon } from '../Assets/save.svg';

function Save() {
  const saveBtn = SaveIcon;
  const handleClick = () => {
    saveBtn.classList.add('fill-base-300');
  };

  return (
    <div className="absolute right-4 bottom-28">
      <button onClick={handleClick} type="submit" className="btn btn-lg border-0 btn-square btn-accent btn-outline fill-accent hover:fill-base-300">
        <SaveIcon id="saveBtn" className="stroke-0 w-10 fill-inherit" />
      </button>
    </div>
  );
}

export default Save;
