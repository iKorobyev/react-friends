export function loadButton(state = false, action) {
  switch (action.type) {
    case "LOAD_BUTTON":
      return action.isPushed;
    default:
      return state;
  }
}
