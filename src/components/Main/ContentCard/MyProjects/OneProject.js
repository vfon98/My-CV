import React from 'react';
import { Grid, Image, Card, Item, List, Header, Icon } from 'semantic-ui-react';
import screenshot from '../../../../assets/images/memory-game-screenshot.png';

function OneProject({ image, name, description, techniques, repo, demo }) {
  return (
    <Grid columns={2}>
      <Grid.Column width={8}>
        <Image src={image || 'https://placehold.it/400' } />
        {/* <Image src={screenshot} /> */}
      </Grid.Column>
      <Grid.Column width={8}>
        <Header data-aos='fade-up'>{name}</Header>
        <List relaxed data-aos='fade-left'>
          <List.Item>
            <List.Header>Description</List.Header>
            <List.Content>{description}</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Techniques</List.Header>
            <List.Content>{techniques}</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Git repository</List.Header>
            <List.Content as='a' href={repo}>
              Take me there <Icon name='share square' />
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Demo</List.Header>
            <List.Content as='a'>{demo}</List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
}

export default OneProject;
