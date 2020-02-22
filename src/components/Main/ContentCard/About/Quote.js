import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledQuote = styled.div`
  .header {
    @import url('https://fonts.googleapis.com/css?family=Special+Elite');
    font-family: 'Special Elite', cursive;
    font-size: 1.1rem;
    font-weight: 550;
    line-height: 1.4;
    text-align: right;
    p {
      /* white-space: pre; */
    }
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
    .header,
    .meta cite {
      font-size: 0.8rem;
    }
    .meta {
      margin-top: 0;
    }
  }
`;

function Quote({ quotes }) {
  return (
    // <Container>
    <Item>
      <Grid>
        <Grid.Row>
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
                    {quotes.content}
                    <Icon name='quote right' />
                  </p>
                </Item.Header>
                <Item.Meta>
                  <cite>{`- ${quotes.author} -`}</cite>
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
            <Item.Image data-aos='flip-down' src={quotes.coverImage} size='tiny' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Item>
    // </Container>
  );
}

Quote.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({
  quotes: state.quotes[4],
});

export default connect(mapStateToProps)(Quote);
