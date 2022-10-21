import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './components/UI/Layout';
import Home from './components/Home/index.js';
import About from './components/About/index.js';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;