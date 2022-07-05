import { USER_LOGIN } from "../utils/types";

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN, payload: user });
  };
};
