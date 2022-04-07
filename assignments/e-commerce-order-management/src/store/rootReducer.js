import { combineReducers } from 'redux';
import userReducer from './users/UserReducer';



const rootReducer = combineReducers({
  usersDetails: userReducer,

  
});

export default rootReducer;
