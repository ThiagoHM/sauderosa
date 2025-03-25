import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Guide from './guide';
import Team from './team';
import Footer from './footer';
import Rating from './rating';
import Tratamento from './tratamento';
import Symptoms from './symptoms';
import Form from './form';
import Risks from './risks';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-grow bg-white dark:bg-gray-900">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <Guide />
                  <Team />
                </>
              }
            />
            <Route path="/rating" element={<Rating />} />
            <Route path="/tratamento" element={<Tratamento/>}/>
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/risks" element={<Risks/>} />
            <Route path="/form" element={<Form />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

;

