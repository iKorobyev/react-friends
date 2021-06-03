export function addToFriends(state = [], action) {
  switch (action.type) {
    case "ADD_TO_FRIENDS":
      return state.includes(action.friends)
        ? state
        : [...state, action.friends];

    case "REMOVE_FROM_FRIENDS":
      return state.filter((_, index) => index !== action.id);
    default:
      return state;
  }
}
