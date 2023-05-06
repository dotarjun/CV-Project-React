import React from 'react';
import Input from './input';

function WorkExp() {
  return (
    <div className="flex flex-col my-6 gap-2">
      <Input placeholder="Title" />
      <div className="flex items-center content-around justify-around">
        <span className="text-xl">From:</span>
        <Input type="date" id="from" />
        <span className="text-xl">To:</span>
        <Input type="date" id="to" />
      </div>
      <textarea className="textarea textarea-lg my-2" name="description" placeholder="Description" />
    </div>
  );
}

export default WorkExp;
