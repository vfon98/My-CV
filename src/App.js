import React, { useEffect, useState } from 'react';
// import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Main from './components/Main/Main';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    // window.addEventListener('scroll', () => {
    //   console.log(window.scrollY > window.innerHeight ? 'out' : 'in')
    // })
  }, []);

  return (
    <>
      <Dimmer active={isLoading}>
        <Loader size='hurge'>Loading...</Loader>
      </Dimmer>
      {/* <Navbar /> */}
      <Banner />
      <Main />
    </>
  );
}

export default App;
