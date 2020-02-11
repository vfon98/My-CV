import { createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancer = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancer);

export default store;
