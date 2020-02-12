import React from 'react';
import {
  Image,
  Label,
  Header,
  Segment,
  Divider,
  Button,
} from 'semantic-ui-react';
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
      <Button color='violet' circular fluid inverted>
        Download my CV
      </Button>
    </Segment>
  );
}

export default InfoCard;
