import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
//import Home from 'pages/Home/home';
import MultiStep from 'pages/Multistep/MultiStep';
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <MultiStep />}/>
          {/* <Route path="/" element={ <Home />}/>
          <Route path="/multi-step" element={ <MultiStep />}/> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
