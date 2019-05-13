const increment = params => dispatch => {
  console.log(params);
  setTimeout(() => {
    dispatch({ type: 'increment' });
  }, 1000);
};

export { increment };
