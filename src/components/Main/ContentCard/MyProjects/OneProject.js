import React from 'react';
import { Grid, Image, Card, Item, List, Header } from 'semantic-ui-react';

function OneProject({ image, name, description, techniques, repo, demo }) {
  return (
    <Grid columns={2}>
      <Grid.Column width={8}>
        <Image src='https://placehold.it/400' />
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
            <List.Content as='a'>{repo}</List.Content>
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
