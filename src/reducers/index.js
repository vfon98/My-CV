import { combineReducers } from 'redux';
import infoReducer from './info.reducer';

const rootReducer = combineReducers({
  info: infoReducer,
});

export default rootReducer;
