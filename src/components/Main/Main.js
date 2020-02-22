import React from 'react';
import { Grid } from 'semantic-ui-react';
import InfoCard from './InfoCard';
import ContentCard from './ContentCard';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <Grid
      container
      style={{ paddingTop: '2rem', marginBottom: '2rem' }}
      stackable
    >
      <Grid.Column width={4}>
        <InfoCard />
      </Grid.Column>
      <Grid.Column width={12}>
        <ContentCard />
        <Footer />
      </Grid.Column>
    </Grid>
  );
}

export default Main;
