import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';
import RightSidebar from './RightSidebar';

import styled from 'styled-components';
import FloatingButtons from './FloatingButtons';

const Wrapper = styled.div`
  .pushable:not(body) {
    transform: none;
  }

  .pushable:not(body) > .ui.sidebar,
  .pushable:not(body) > .fixed,
  .pushable:not(body) > .pusher:after {
    position: sticky;
    top: 0;
  }
`;

function HOCSidebar(props) {
  const [visible, setVisible] = useState(false);

  const toggleSidebarVisible = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <FloatingButtons
        sidebarVisible={visible}
        toggleSidebar={toggleSidebarVisible}
      />

      <Sidebar.Pushable style={{ margin: 0 }}>
        <RightSidebar visible={visible} onHide={() => setVisible(false)} />
        <Sidebar.Pusher dimmed={visible}>{props.children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </Wrapper>
  );
}

HOCSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HOCSidebar;
