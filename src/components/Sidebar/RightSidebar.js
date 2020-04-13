import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Sidebar, Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import websiteLogo from '../../assets/images/vphog-me-logo.png'

const sidebarStyles = {
  position: 'fixed',
  minHeight: '100vh',
  top: 0,
  left: 0,
  zIndex: 1,
};

function RightSidebar(props) {
  const isOutBanner = useSelector(state => state.scroll.isOutBanner);

  useEffect(() => {
    if (props.visible && !isOutBanner) {
      props.onHide();
    }
    // eslint-disable-next-line
  }, [isOutBanner]);

  return (
    <Sidebar
      inverted
      vertical
      visible={props.visible}
      onHide={props.onHide}
      onClick={props.onHide}
      direction='left'
      animation='slide along'
      style={sidebarStyles}
      width='thin'
      as={Menu}
      className='fixed'
    >
      <Menu.Item>
        <Image src={websiteLogo} alt='vphong.me' />
      </Menu.Item>
      <Menu.Item as='a' href='#about-me'>
        <Icon name='user' />
        About me
      </Menu.Item>
      <Menu.Item as='a' href='#education'>
        <Icon name='university' />
        Education
      </Menu.Item>
      <Menu.Item as='a' href='#experience'>
        <Icon name='star' />
        Experience
      </Menu.Item>
      <Menu.Item as='a' href='#skills'>
        <Icon name='chart bar' />
        My skills
      </Menu.Item>
      <Menu.Item as='a' href='#projects'>
        <Icon name='code' />
        My projects
      </Menu.Item>
      <Menu.Item as='a' href='#languages'>
        <Icon name='globe' />
        Languages
      </Menu.Item>
      <Menu.Item as='a' href='#contact'>
        <Icon name='phone' />
        Contact
      </Menu.Item>
    </Sidebar>
  );
}

RightSidebar.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};

export default RightSidebar;
