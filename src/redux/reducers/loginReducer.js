import { REHYDRATE } from "redux-persist";

function userReducer(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      let newState =
        action.payload.loginReducer.length > 0 || action.payload.loginReduce !== undefined
          ? action.payload.loginReducer
          : [];
      return [...newState];

    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user[0],
      };
    default:
      return [];
  }
}
export default userReducer;
