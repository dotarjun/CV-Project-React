import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 absolute w-screen bottom-0">
      <p className="text-3xl text-center py-8 text-slate-400">
        Copyright © 2023
        {' '}
        <a href="https://github.com/dotarjun" className="text-slate-200">Arjun Singh</a>
      </p>
    </footer>
  );
}
