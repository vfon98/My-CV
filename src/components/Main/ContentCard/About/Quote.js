import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Item, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledQuote = styled.div`
  /* margin: 0 1.2rem; */
  display: flex;
  justify-content: flex-end;
  .header {
    @import url('https://fonts.googleapis.com/css?family=Special+Elite');
    font-family: 'Special Elite', cursive;
    font-size: 1.2rem;
    font-weight: 550;
    line-height: 1.4;
    text-align: right;
    p {
      white-space: pre;
    }
  }

  .icon {
    position: relative;
    font-size: 0.8rem;
    top: -8px;
    color: grey;
    margin: 0 0.3rem;
  }

  .meta {
    margin-top: 0.4rem;
    padding-right: 0.2rem;
    cite {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

function Quote({ quotes }) {
  return (
    <Container>
      <Item.Group>
        <Item>
          <Grid container>
            <Grid.Row>
              <Grid.Column width={14} textAlign='right'>
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
              <Grid.Column width={2}>
                <Item.Image src={quotes.coverImage} size='tiny' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item>
      </Item.Group>
    </Container>
  );
}

Quote.propTypes = {
  quotes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({
  quotes: state.quotes[4],
});

export default connect(mapStateToProps)(Quote);
