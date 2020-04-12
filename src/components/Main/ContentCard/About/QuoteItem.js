import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Item, Icon, Grid } from 'semantic-ui-react';

const StyledQuote = styled.div`
  .header {
    font-family: cursive, Verdana, sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    font-weight: 550;
    line-height: 1.4;
    text-align: right;
    margin-left: 0.9em;
  }

  .icon {
    position: relative;
    font-size: 0.6rem;
    top: -5px;
    color: grey;
    margin: 0 0.2rem;
  }

  .meta {
    margin-top: 0.4rem;
    padding-right: 0.2rem;
    cite {
      font-weight: 400;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 375px) {
    .header {
      font-size: 0.7rem;
      margin-left: 1em;
      p {
        white-space: pre-line;
      }
    }
    .meta {
      margin-top: 0;
      cite {
        font-size: 0.6rem;
      }
    }
    .icon {
      top: -2px;
    }
  }
`;

function QuoteItem({ quote }) {
  return (
    <Item>
      <Grid>
        <Grid.Column
          computer={14}
          tablet={12}
          mobile={12}
          textAlign='right'
          style={{ paddingLeft: 0 }}
        >
          <StyledQuote>
            <Item.Content verticalAlign='middle'>
              <Item.Header>
                <p>
                  <Icon name='quote left' />
                  {quote.content}
                  <Icon name='quote right' />
                </p>
              </Item.Header>
              <Item.Meta data-aos='fade-up'>
                <cite>{`- ${quote.author} -`}</cite>
              </Item.Meta>
            </Item.Content>
          </StyledQuote>
        </Grid.Column>
        <Grid.Column
          computer={2}
          tablet={4}
          mobile={4}
          style={{ paddingLeft: 0 }}
        >
          <Item.Image
            data-aos='fade-left'
            data-aos-duration='1000'
            src={quote.coverImage}
            size='tiny'
          />
        </Grid.Column>
      </Grid>
    </Item>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string,
    coverImage: PropTypes.string.isRequired
  }),
};

QuoteItem.defaultProps = {
  quote: {
    author: 'Unknown',
  },
};

export default QuoteItem;
