import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import FbLogo from '../../assets/images/socials/fb.svg';
import SkypeLogo from '../../assets/images/socials/skype.svg';
import ZaloLogo from '../../assets/images/socials/zalo.svg';
import LinkedInLogo from '../../assets/images/socials/linkedin.svg'

function Contact() {
  return (
    <Grid.Column textAlign='center'>
      <Header>Contact me</Header>
      <Image.Group size='mini'>
        <Image data-aos='flip-right' src={FbLogo} />
        <Image data-aos='flip-right' src={SkypeLogo} />
        <Image data-aos='flip-right' src={ZaloLogo} />
        <Image data-aos='flip-right' src={LinkedInLogo} />
      </Image.Group>
    </Grid.Column>
  );
}

export default Contact;
