import React, { useEffect, useState } from 'react';
// import Navbar from './components/Header/Navbar/Navbar';
import Banner from './components/Header/Banner/Banner';
import Main from './components/Main/Main';
import LoadingScreen from './components/SharedUI/LoadingScreen';
import styled from 'styled-components';
import AOS from 'aos';
import HOCSidebar from './components/Sidebar/HOCSidebar';

const TopWrapper = styled.div`
  overflow: hidden;
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
    <>
      {isLoading ? (
        <TopWrapper>
          <LoadingScreen shown={isLoading} />
          {/* Loading Banner when loading to avoid load time */}
          <Banner />
        </TopWrapper>
      ) : (
        <>
          <Banner />
          <HOCSidebar>
            <Main />
          </HOCSidebar>
        </>
      )}
    </>
  );
}

export default App;
