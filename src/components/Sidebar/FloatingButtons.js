import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Transition, Button } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { scrollOutBanner, scrollInBanner } from '../../actions/scroll.action';

const arrow = keyframes`
  0% {
    padding-left: -3px;
    opacity: 0.8;
  }
  50% {
    padding-left: 3px;
    opacity: 1;
  }
  100% {
    padding-left: -3px;
    opacity: 0.8;
  }
`;

const ToggleButton = styled(Button)`
  position: fixed;
  top: 20%;
  left: -2px;
  z-index: 5;
  opacity: 0.7;
  .icon {
    animation: ${arrow} 1.5s linear infinite;
  }
  @media (max-width: 425px) {
    width: 32px;
    height: auto;
    .icon {
      font-size: 0.8rem;
    }
  }
`;

const ScrollTopButton = styled(Button)`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 5;
  opacity: 0.9;
`;

function FloatingButtons(props) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
        dispatch(scrollOutBanner());
      } else {
        setVisible(false);
        dispatch(scrollInBanner());
      }
    });
    return window.removeEventListener('scroll', null);
    // eslint-disable-next-line
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* SCROLL TOP BUTTON */}
      <Transition visible={visible} animation='zoom' duration={500}>
        <ScrollTopButton
          inverted
          color='green'
          icon='arrow up'
          size='medium'
          circular
          onClick={scrollToTop}
        />
      </Transition>

      {/* TOGGLE SIDEBAR BUTTON 
        - Visible by scroll position has higher prioriry
        - Hide button when sidebar visible
      */}
      <Transition
        visible={visible && !props.sidebarVisible}
        animation='browse'
        duration={500}
      >
        <ToggleButton
          color='violet'
          size='small'
          outline
          onClick={props.toggleSidebar}
          icon='angle double right'
        />
      </Transition>
    </>
  );
}

FloatingButtons.propTypes = {
  sidebarVisible: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  hideOpenedSidebar: PropTypes.func,
};

export default FloatingButtons;
