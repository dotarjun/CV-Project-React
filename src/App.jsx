import React from 'react';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';

function App() {
  return (
    <div className="bg-slate-800 text-slate-200 min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
