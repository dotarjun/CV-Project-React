import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-focus absolute w-screen bottom-0">
      <p className="text-center py-10 text-base-content">
        Copyright © 2023
        {' '}
        <a href="https://github.com/dotarjun" className="text-accent hover:text-accent-focus">Arjun Singh</a>
      </p>
    </footer>
  );
}
