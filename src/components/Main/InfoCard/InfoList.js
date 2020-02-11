import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import InfoItem from './InfoItem';

function InfoList(props) {
  return (
    <List divided animated relaxed verticalAlign='middle'>
      {props.info.map(item => (
        <InfoItem key={item.id} {...item} />
      ))}
    </List>
  );
}

const mapStateToProps = state => ({
  info: state.info,
});

export default connect(mapStateToProps)(InfoList);
