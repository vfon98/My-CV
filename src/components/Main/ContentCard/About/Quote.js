import React, { useEffect } from 'react';
import { allQuotes, getRandomQuote } from '../../../../actions/quotes.action';

/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import QuoteItem from './QuoteItem';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function Quote({ allQuotes, quotes = [] }) {
  useEffect(() => {
    allQuotes();
    // eslint-disable-next-line
  }, []);

  const settings = {
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: false,
    appendDots: dots => (
      <div style={{ transform: 'translateY(0.5em)' }}>{dots}</div>
    ),
  };

  return (
    <Slider {...settings}>
      {quotes.map(quote => (
        <QuoteItem key={quote.id} quote={quote} />
      ))}
    </Slider>
  );
}

Quote.propTypes = {
  getRandomQuote: PropTypes.func,
  allQuotes: PropTypes.func,
  selectedQuote: PropTypes.object.isRequired,
  quotes: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  selectedQuote: state.quotes.selectedQuote,
  quotes: state.quotes.list,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getRandomQuote, allQuotes }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
