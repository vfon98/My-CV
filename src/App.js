import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Main from './components/Main/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return isLoading  ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Navbar />
      <Banner />
      <Main />
    </>
  );
}

export default App;
