import { createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
 import logger from 'redux-logger';
import rootReducers from './rootReducers';
const middleware = [thunk];
 

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, ...middleware))
);

export default store;




