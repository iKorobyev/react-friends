export const usersIsLoading = bool => {
  return {
    type: "USERS_IS_LOADING",
    isLoading: bool
  };
};

export const usersHasErrored = bool => {
  return {
    type: "USERS_HAS_ERRORED",
    hasErrored: bool
  };
};

export const usersFetchDataSuccess = users => {
  return {
    type: "USERS_FETCH_DATA_SUCCESS",
    users
  };
};

export function usersFetchData(url) {
  return dispatch => {
    dispatch(usersIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        dispatch(usersIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(response => response.results)
      .then(users => dispatch(usersFetchDataSuccess(users)))
      .catch(() => dispatch(usersHasErrored(true)));
  };
}
