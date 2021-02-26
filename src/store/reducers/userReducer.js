import { SET_USER } from "../constans";

const initState = false;
const userState = {};
const user = (state = userState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default user;
