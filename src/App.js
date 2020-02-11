import React from 'react';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar'
import Banner from './components/Header/Banner/Banner';
import Main from './components/Main/Main'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Main />
    </>
  );
}

export default App;
