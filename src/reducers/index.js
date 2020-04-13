import { combineReducers } from 'redux';
import infoReducer from './info.reducer';
import skillsReducer from './skills.reducer';
import projectsReducer from './projects.reducer';
import contactsReducer from './contacts.reducer';
import quotesReducer from './quotes.reducer';
import scrollReducer from './scroll.reducer';

const rootReducer = combineReducers({
  info: infoReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  contacts: contactsReducer,
  quotes: quotesReducer,
  scroll: scrollReducer,
});

export default rootReducer;
