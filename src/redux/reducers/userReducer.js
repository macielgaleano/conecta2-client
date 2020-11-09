function userReducer(state = [], action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        tokens: action.payload.tokens,
        userEmail: action.payload.userEmail,
      };
  }
}
export default userReducer;
