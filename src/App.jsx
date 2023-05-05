import React from 'react';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* bg-slate-800 text-slate-200  */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
