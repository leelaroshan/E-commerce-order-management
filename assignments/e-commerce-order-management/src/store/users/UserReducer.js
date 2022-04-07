import { GET_USERS } from '../types';

const initialState = {
  userList: [],
  isUserLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, userList: [action.payload ]};

    default:
      return state;
  }
};

export default userReducer;
