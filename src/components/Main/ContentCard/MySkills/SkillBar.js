import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Item } from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

const autoIncrease = keyframes`
  from {
    max-width: 0;
  }
  to {
    max-width: 100%;
  }
`;

const StyledItem = styled(Item)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  .progress .bar {
    animation: ${autoIncrease} 1.5s ease-in;
  }
`;

function OneSkill({ aos, header, percent, color = 'violet' }) {
  return (
    <StyledItem data-aos={aos}>
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
    </StyledItem>
  );
}

OneSkill.propTypes = {
  aos: PropTypes.string,
  header: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default OneSkill;
