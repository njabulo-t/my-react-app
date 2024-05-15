import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Work from './Work';
import Biography from './Biography';
import Contact from './Contact';
import Footer from './Footer';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import './App.css';


function App() {
  return (
    <div className="App">
    
      <Router>
<Navbar/>
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/work" element={<Work />} />
  <Route path="/biography" element={<Biography/>}  />
  <Route path="/contact" element={<Contact />} />
</Routes>
</Router>
< Footer />
    </div>

  );
}

export default App;
