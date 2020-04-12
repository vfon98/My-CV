import * as types from '../constants/action.types';
import Dijkstra from '../assets/images/dijkstra.jpg';
import PoorProgrammer from '../assets/images/poor-programmer.png';
import Linus from '../assets/images/linus-torvalds.jpg';
import DavidLeinweber from '../assets/images/david-leinweber.jpeg';

const initialState = {
  selectedQuote: {},
  all: [
    {
      id: 0,
      content: `If debugging is the process of removing software bugs, then programming must be the process of putting them in`,
      author: 'Edsger Dijkstra',
      coverImage: Dijkstra,
    },
    {
      id: 1,
      content: 'It’s not a bug. It’s an undocumented feature!',
      author: 'Someone that needs to be respected',
      coverImage: PoorProgrammer,
    },
    {
      id: 2,
      content:
        'Software Developer – An organism that turns caffeine into software',
      author: 'Someone who gonna meet the deadline',
      coverImage: PoorProgrammer,
    },
    {
      id: 3,
      content: `Talk is cheap.
      Show me the code.`,
      author: 'Linus Torvalds',
      coverImage: Linus,
    },
    {
      id: 4,
      content: `My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why`,
      author: 'A hopeless programmer',
      coverImage: PoorProgrammer,
    },
    {
      id: 5,
      content: `Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime`,
      author: 'David Leinweber',
      coverImage: DavidLeinweber,
    },
  ],
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RANDOM_QUOTE:
      return {
        ...state,
        selectedQuote: state.all[Math.floor(Math.random() * state.all.length)],
      };
    case types.ALL_QUOTES:
      // Shuffle when returning
      return {
        list: [...state.all].sort(() => 0.5 - Math.random()),
      };
    default:
      return state;
  }
};

export default quotesReducer;
