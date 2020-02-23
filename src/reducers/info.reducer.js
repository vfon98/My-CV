import * as types from '../constants/action.types';
const initialState = [
  {
    id: 0,
    icon: 'university',
    header: 'Education',
    content: 'Can Tho University',
    link: 'https://www.ctu.edu.vn/',
  },
  {
    id: 1,
    icon: 'suitcase',
    header: 'Major',
    content: 'Software Engineering',
    link: 'http://cit.ctu.edu.vn/',
  },
  {
    id: 2,
    icon: 'at',
    header: 'Email',
    content: 'vfon98@gmail.com',
    link: 'mailto://vfon98@gmail.com/',
  },
  {
    id: 3,
    icon: 'github',
    header: 'Github',
    content: 'github.com/vfon98',
    link: 'https://github.com/vfon98',
  },
  {
    id: 4,
    icon: 'skype',
    header: 'Skype',
    content: 'vfon98',
    link: 'https://join.skype.com/invite/h3Jrvs3WaJfc',
  },
];

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INFO:
      return state;
    default:
      return state;
  }
};

export default infoReducer;
