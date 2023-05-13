import React, { useState } from 'react';
import Save from './save';

function Experience() {
  const [JobTitle, setJobTitle] = useState('');
  const [Company, setCompany] = useState('');
  const [FromDate, setFromDate] = useState('');
  const [ToDate, setToDate] = useState('');
  const [Experiences, setExperiences] = useState([]);

  const handleAddExperience = () => {
    const newExperience = {
      JobTitle,
      Company,
      FromDate,
      ToDate,
    };

    if (Array.isArray(Experiences)) {
      setExperiences(Experiences.concat(newExperience));
    } else {
      setExperiences([newExperience]);
    }

    setJobTitle('');
    setCompany('');
    setFromDate('');
    setToDate('');
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Experience</h3>
      </div>

      <div className="flex flex-col my-6 gap-2">
        <input
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          value={JobTitle}
          className="input input-lg my-2"
          name="jobTitle"
        />
        <input
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
          value={Company}
          className="input input-lg my-2"
          name="companyName"
        />
        <div className="flex items-center content-around justify-around">
          <span className="text-xl">From:</span>
          <input
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
            id="from"
            value={FromDate}
            className="input input-lg my-2"
            name="fromDate"
          />
          <span className="text-xl">To:</span>
          <input
            onChange={(e) => setToDate(e.target.value)}
            type="date"
            id="to"
            value={ToDate}
            className="input input-lg my-2"
            name="toDate"
          />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-block bg-base-100 hover:border-base-content hover:border-2 hover:bg-base-100 hover:border-opacity-30  text-2xl"
        onClick={handleAddExperience}
      >
        +
      </button>
      <Save />
      {Experiences.length > 0 ? (
        Experiences.map((experience, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <h4>{experience.JobTitle}</h4>
            <p>
              {experience.FromDate}
              {' '}
              -
              {' '}
              {experience.ToDate}
            </p>
            <p>{experience.Description}</p>
          </div>
        ))
      ) : (
        <p>No Experience yet.</p>
      )}
    </div>
  );
}

export default Experience;
