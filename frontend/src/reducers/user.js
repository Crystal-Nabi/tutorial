import { USER_LOGIN } from "../utils/types";
const initialState = {
  user: {},
  token: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
