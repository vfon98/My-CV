import React from 'react';
import { Image, Segment, Divider, Button } from 'semantic-ui-react';
import MyAvatar from '../../../assets/images/my-avatar.svg';
import InfoList from './InfoList';
import Ribbon from '../../SharedUI/Ribbon';

function InfoCard() {
  return (
    <Segment raised color='red' style={{ position: 'sticky', top: '1rem' }}>
      <Ribbon color='red' size='huge'>
        Phong To
      </Ribbon>
      <Segment>
        <Image src={MyAvatar} size='small' centered />
        <Divider horizontal>Web developer</Divider>
        <InfoList />
      </Segment>
      <Button color='violet' circular fluid inverted>
        Download my CV
      </Button>
    </Segment>
  );
}

export default InfoCard;
