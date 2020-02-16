import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Item } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledItem = styled.div`
  &:not(:last-child) {
    /* margin-bottom: 1em; */
  }
`;

function OneSkill({ header, percent, color = 'violet' }) {
  return (
    <StyledItem>
      <Item>
        <Item.Content>
          <Item.Header as='strong'>{header}</Item.Header>
          <Progress
            percent={percent}
            // progress
            color={color}
            size='tiny'
            label={percent + '%'}
          />
        </Item.Content>
      </Item>
    </StyledItem>
  );
}

OneSkill.propTypes = {
  header: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default OneSkill;
