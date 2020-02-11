import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

function Navbar() {
  return (
    <Menu inverted secondary pointing fixed='top' size='large'>
      <Container>
        <Menu.Menu position='left'>
          <Menu.Item>vphong.me</Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='home' active>
            Home
          </Menu.Item>
          <Menu.Item name='contact'>Experience</Menu.Item>
          <Menu.Item name='contact'>Study</Menu.Item>
          <Menu.Item name='contact'>Contact</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;
