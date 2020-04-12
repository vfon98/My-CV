/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getRandomQuote, allQuotes } from '../../../../actions/quotes.action';
import QuoteItem from './QuoteItem';
import Slider from 'react-slick';

function Quote({ allQuotes, quotes = [] }) {
  useEffect(() => {
    allQuotes();
    // GET FIRST QUOTE
    // getRandomQuote();
    // const timer = setInterval(() => {
    //   getRandomQuote();
    // }, 3000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  const settings = {
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: true,
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
