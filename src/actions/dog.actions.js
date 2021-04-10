// action types.
export const actions = {
  SET_DOG_DATA: "SET_DOG_DATA",
};

// set complete user data to redux.
export const setDogData = (data) => ({
  type: actions.SET_DOG_DATA,
  data,
});
