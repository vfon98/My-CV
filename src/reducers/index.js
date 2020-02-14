import { combineReducers } from 'redux';
import infoReducer from './info.reducer';
import skillsReducer from './skills.reducer';
import projectsReducer from './projects.reducer';

const rootReducer = combineReducers({
  info: infoReducer,
  skills: skillsReducer,
  projects: projectsReducer,
});

export default rootReducer;
