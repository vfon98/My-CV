import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${props => (props.shown ? 'block' : 'none')};
  height: 100vh;
  background: #6997db;
  overflow: hidden;
  #loader {
    /* Uncomment this to make it run! */
    /* animation: loader 5s linear infinite; */

    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }
  @keyframes loader {
    0% {
      left: -100px;
    }
    100% {
      left: 110%;
    }
  }
  #box {
    width: 50px;
    height: 50px;
    background: #fff;
    overflow: hidden;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  #shadow {
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }
  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
  h2 {
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 20px;
    margin: 0;
    font-weight: 500;
    opacity: 0.5;
    font-family: sans-serif;
    color: #fff;
  }
`;

function LoadingScreen({ shown = true }) {
  return (
    <Wrapper shown={shown}>
      <div id='loader' data-aos='fade-right' data-aos-duration='1800'>
        <div id='shadow'></div>
        <div id='box'></div>
      </div>
      <h2>Loading</h2>
    </Wrapper>
  );
}

LoadingScreen.propTypes = {
  shown: PropTypes.bool,
};

export default LoadingScreen;
