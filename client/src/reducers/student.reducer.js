import { GET_USERS } from "../actions/student.action";

const initialState = {};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    default:
      return state;
  }
}
