const logged = (data) => {
  return {
    type: "LOGGED",
    payload: {
      tokens: data.tokens,
      userEmail: data.userEmail,
    },
  };
};

const actions = { logged };

export default actions;
