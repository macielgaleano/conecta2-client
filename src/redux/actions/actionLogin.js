const actionLogin = (data, user) => {
  return {
    type: "LOGGED",
    payload: {
      token: data.token,
      user: user,
    },
  };
};

export default actionLogin;
