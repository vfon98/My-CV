import * as types from '../constants/action.types';

const initialState = {
  isOutBanner: false,
};

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SCROLL_OUT_BANNER:
      return {
        ...state,
        isOutBanner: true,
      };
    case types.SCROLL_IN_BANNER:
      return {
        ...state,
        isOutBanner: false,
      };
    default:
      return state;
  }
};

export default scrollReducer;
