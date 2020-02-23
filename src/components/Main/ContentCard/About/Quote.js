import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Item, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { getRandomQuote } from '../../../../actions/quotes.action';

const StyledQuote = styled.div`
  .header {
    @import url('https://fonts.googleapis.com/css?family=Special+Elite');
    font-family: 'Special Elite', cursive;
    font-size: 1.1rem;
    font-weight: 550;
    line-height: 1.4;
    text-align: right;
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

function Quote({ getRandomQuote, selectedQuote }) {
  useEffect(() => {
    // GET FIRST QUOTE
    getRandomQuote();
    const timer = setInterval(() => {
      getRandomQuote();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

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
                  {selectedQuote.content}
                  <Icon name='quote right' />
                </p>
              </Item.Header>
              <Item.Meta data-aos='fade-up'>
                <cite>{`- ${selectedQuote.author} -`}</cite>
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
            src={selectedQuote.coverImage}
            size='tiny'
          />
        </Grid.Column>
      </Grid>
    </Item>
  );
}

Quote.propTypes = {
  getRandomQuote: PropTypes.func,
  selectedQuote: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  selectedQuote: state.quotes.selectedQuote,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getRandomQuote }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
