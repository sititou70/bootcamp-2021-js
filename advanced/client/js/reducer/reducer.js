export const reducer = (old_state, action) => {
  switch (action.type) {
    case 'SET_STORE_STATE':
      return {
        ...old_state,
        ...action.payload,
      };
  }

  return old_state;
};
