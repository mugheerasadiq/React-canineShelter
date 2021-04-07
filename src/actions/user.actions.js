// action types.
export const actions = {
  SET_USER_DATA: "SET_USER_DATA",
};

// set complete user data to redux.
export const setUserData = (data) => ({
  type: actions.SET_USER_DATA,
  data,
});
