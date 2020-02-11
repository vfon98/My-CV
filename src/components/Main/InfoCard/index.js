import React from 'react';
import { Image, Label, Header, Segment, Divider } from 'semantic-ui-react';
import MyAvatar from '../../../assets/images/my-avatar.svg';
import InfoList from './InfoList';

function InfoCard() {
  return (
    <Segment raised>
      <Label ribbon as='a' color='red' size='big'>
        <Header as='h3'>To Vu Phong</Header>
      </Label>
      <Segment>
        <Image src={MyAvatar} size='small' centered />
        <Divider horizontal>Web developer</Divider>
        <InfoList />
      </Segment>
    </Segment>
  );
}

export default InfoCard;
