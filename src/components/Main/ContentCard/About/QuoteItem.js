import { Grid, Icon, Item } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledQuote = styled.div`
  .header {
    font-family: 'Kalam', cursive, sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    font-weight: 500;
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
      font-size: 1rem;
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
`

const StyledImage = styled(Item.Image)`
  img {
    max-height: 6.5rem;
  }
`

function QuoteItem({ quote }) {
  return (
    <Item>
      <Grid>
        <Grid.Column
          computer={14}
          tablet={12}
          mobile={12}
          textAlign="right"
          style={{ paddingLeft: 0 }}
        >
          <StyledQuote>
            <Item.Content verticalAlign="middle">
              <Item.Header>
                <p>
                  <Icon name="quote left" />
                  <span
                    dangerouslySetInnerHTML={{ __html: quote.content }}
                  ></span>
                  <Icon name="quote right" />
                </p>
              </Item.Header>
              <Item.Meta data-aos="fade-up">
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
          <StyledImage
            data-aos="fade-left"
            data-aos-duration="1000"
            src={quote.coverImage}
            size="tiny"
          />
        </Grid.Column>
      </Grid>
    </Item>
  )
}

QuoteItem.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string,
    coverImage: PropTypes.string.isRequired,
  }),
}

QuoteItem.defaultProps = {
  quote: {
    author: 'Unknown',
  },
}

export default QuoteItem
