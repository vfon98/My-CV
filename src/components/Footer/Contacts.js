import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OneContact from './OneContact';

function Contacts({ contacts }) {
  return (
    <Grid.Column textAlign='center'>
      <Header>Contact me</Header>
      <Image.Group size="mini">
        {
          contacts.map(contact => (
            <OneContact key={contact.id} {...contact} />
          ))
        }
      </Image.Group>
    </Grid.Column>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(Contacts);
