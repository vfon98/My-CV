import Dijkstra from '../assets/images/dijkstra.jpg';
import PoorProgrammer from '../assets/images/poor-programmer.png'
import Linus from '../assets/images/linus-torvalds.jpg'

const initialState = [
  {
    id: 0,
    content:
      `If debugging is the process of removing software bugs,
      then programming must be the process of putting them in`,
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
    content:
      'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds',
    coverImage: Linus,
  },
  {
    id: 4,
    content:
      `My code DOESN’T work, I have no idea why.
      My code WORKS, I have no idea why.`,
    author: 'A hopeless programmer',
    coverImage: PoorProgrammer,
  },
];

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default quotesReducer;
