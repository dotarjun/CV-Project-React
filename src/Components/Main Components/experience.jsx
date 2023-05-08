import React, { useState } from 'react';
import Input from './input';


function Experience(jobTitle, fromDate, toDate) {
  const [JobTitle, setJobTitle] = useState(jobTitle);
  const [FromDate, setFromDate] = useState(fromDate);
  const [ToDate, setToDate] = useState(toDate);



  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Experience</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl" />
      </div>

      <div className="flex flex-col my-6 gap-2">
        <Input
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Title"
        />
        <div className="flex items-center content-around justify-around">
          <span className="text-xl">From:</span>
          <Input
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
            id="from"
          />
          <span className="text-xl">To:</span>
          <Input
            onChange={(e) => setToDate(e.target.value)}
            type="date"
            id="to"
          />
        </div>
        <textarea className="textarea textarea-lg my-2" name="description" placeholder="Description" />
      </div>

      <button type="button" className="btn btn-block bg-base-100 hover:border-base-content hover:border-2 hover:bg-base-100 hover:border-opacity-30  text-2xl">+</button>
    </div>
  );
}

export default Experience;
