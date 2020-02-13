import { combineReducers } from 'redux';
import infoReducer from './info.reducer';
import skillsReducer from './skills.reducer';

const rootReducer = combineReducers({
  info: infoReducer,
  skills: skillsReducer,
});

export default rootReducer;
