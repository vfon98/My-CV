import React from 'react';
import { Grid, Image, List, Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function OneProject({
  image,
  name,
  description,
  techniques,
  team_size,
  repo,
  demo,
}) {
  return (
    <Grid columns={2} stackable>
      <Grid.Column width={8}>
        <Image data-aos='fade-right' src={image || 'https://placehold.it/400'} />
        {/* <Image src={screenshot} /> */}
      </Grid.Column>
      <Grid.Column width={8}>
        <Header data-aos='fade-down'>{name}</Header>
        <List relaxed>
          <List.Item data-aos='fade-left'>
            <List.Header>Description</List.Header>
            <List.Content>{description}</List.Content>
          </List.Item>
          <List.Item data-aos='fade-left'>
            <List.Header>Tech stack</List.Header>
            <List.Content>{techniques}</List.Content>
          </List.Item>
          {team_size && (
            <List.Item data-aos='fade-left'>
              <List.Header>Team size</List.Header>
              <List.Content>{team_size}</List.Content>
            </List.Item>
          )}
          <List.Item data-aos='fade-left'>
            <List.Header>Git repository</List.Header>
            <List.Content as='a' href={repo}>
              Take me there <Icon name='share square' />
            </List.Content>
          </List.Item>
          <List.Item data-aos='fade-left'>
            <List.Header>Demo</List.Header>
            <List.Content as='a'>{demo}</List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  );
}

OneProject.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techniques: PropTypes.string.isRequired,
  team_size: PropTypes.number,
  repo: PropTypes.string,
  demo: PropTypes.string,
};

export default OneProject;
