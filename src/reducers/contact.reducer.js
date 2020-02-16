import * as types from '../constants/action.types';
import FbLogo from '../assets/images/socials/fb.svg';
import SkypeLogo from '../assets/images/socials/skype.svg';
import ZaloLogo from '../assets/images/socials/zalo.svg';
import MessengerLogo from '../assets/images/socials/messenger.svg';

const ininitalState = [
  {
    id: 0,
    image: FbLogo,
    link: 'https://www.facebook.com/vfon98',
  },
  {
    id: 1,
    image: SkypeLogo,
    link: 'https://join.skype.com/invite/h3Jrvs3WaJfc',
  },
  {
    id: 2,
    image: ZaloLogo,
    link: 'https://www.facebook.com/vfon98',
  },
  {
    id: 3,
    image: MessengerLogo,
    link: 'https://m.me/vfon98',
  },
];

const contactReducer = (state = ininitalState, action) => {
  switch (action.type) {
    case types.GET_CONTACT:
      return state;
    default:
      return state;
  }
};

export default contactReducer;
