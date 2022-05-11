import { FETCH_USERS } from "../types";

const initialState = {
    usersState: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, usersState: [action.payload] };

    default:
      return state;
  }
};

export default usersReducer;

