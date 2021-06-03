export const addToFriends = friends => {
  return {
    type: "ADD_TO_FRIENDS",
    friends
  };
};

export const removeFromFriends = id => {
  return {
    type: "REMOVE_FROM_FRIENDS",
    id
  };
};
