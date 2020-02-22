import React from 'react';
import { Grid, Header, Icon, List } from 'semantic-ui-react'

function Credit() {
  return (
    <Grid.Column>
      <Header as='h4' className='mb-0' data-aos='fade-up'>
        Thanks for visiting!{' '}
        <Icon name='heart' inverted size='mini' color='red' />
      </Header>
      <List>
        <List.Item data-aos='fade-up'>
          <div>
            Made by me with <Icon name='keyboard outline' /> and{' '}
            <Icon name='hand peace outline' />
          </div>
        </List.Item>
        <List.Item data-aos='fade-up'>Powered by Github</List.Item>
      </List>
    </Grid.Column>
  );
}

export default Credit;
