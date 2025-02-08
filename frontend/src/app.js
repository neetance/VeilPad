import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Register from './register';
import Contribute from './contribute';
import Claim from './claim';
import "../src/app.css";
const App = () => {
  return (
    <Router>
      <nav className='navigation' >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contribute">Contribute</Link>
          </li>
          <li>
            <Link to="/claim">Claiming</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="*" element={<Home />} /> { /* When there is random url , go to home page */ }
      </Routes>
    </Router>
  );
};

export default App;