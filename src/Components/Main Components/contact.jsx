import React from 'react';
import Input from './input';

function Contact() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h3 className="">Contact</h3>
        <div className="shadow-md shadow-slate-950 w-8 h-8 cursor-pointer hover:shadow-slate-950 hover:shadow-xl" />
      </div>
      <div className="flex flex-col my-6 gap-2">
        <Input placeholder="Email" type="mail" />
        <Input placeholder="GitHub" />
        <Input placeholder="LinkedIn" />
      </div>
    </div>
  );
}

export default Contact;
