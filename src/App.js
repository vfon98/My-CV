import React, { useEffect, useState } from 'react';
// import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Main from './components/Main/Main';
import LoadingScreen from './components/SharedUI/LoadingScreen';
import styled from 'styled-components';
import AOS from 'aos';

const TopWrapper = styled.div`
  overflow: ${props => props.shown ? 'hidden' : ''};
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      AOS.refreshHard();
    }, 3500);
  }, []);

  return (
    <TopWrapper shown={isLoading}>
      <LoadingScreen shown={isLoading} />
      {/* Content will be hidden when LoadingScreen is shown */}
      {/* <Navbar /> */}
      <Banner />
      <Main />
    </TopWrapper>
  );
}

export default App;
