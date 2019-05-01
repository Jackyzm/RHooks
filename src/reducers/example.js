const initialState = { count: 1 };

const example = function(state = initialState, action) {
  switch (action.type) {
    case 'reset':
      return { count: action.payload };
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
};

export default example;
