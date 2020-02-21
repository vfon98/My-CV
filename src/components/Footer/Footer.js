import React from 'react';
import { Segment, Divider, Grid } from 'semantic-ui-react';
import Contacts from './Contacts';
import styled from 'styled-components';
import Credit from './Credit';

const CopyRight = styled.div`
  text-align: center;
  margin: -6px 0;
`;

// Placed inside Main
function Footer() {
  return (
    <Segment stacked color='grey'>
      <Grid columns='equal'>
        <Grid.Row>
          {/* FOOTER CONTENT */}
          <Credit />
          <Contacts />
          {/* END */}
        </Grid.Row>
      </Grid>

      <Divider />
      <CopyRight>Copyright &copy; 2020 | vphong.me</CopyRight>
    </Segment>
  );
}

export default Footer;
