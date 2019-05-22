export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    default:
      break;
  }

  return state;
};
