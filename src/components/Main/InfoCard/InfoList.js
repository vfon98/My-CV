import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import InfoItem from './InfoItem';
import PropTypes from 'prop-types'

function InfoList({info}) {
  return (
    <List divided animated relaxed verticalAlign='middle'>
      {info.map(item => (
        <InfoItem key={item.id} {...item} />
      ))}
    </List>
  );
}

InfoList.propTypes = {
  info: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  info: state.info,
});

export default connect(mapStateToProps)(InfoList);
