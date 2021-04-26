export const reducer = (old_state, action) => {
  switch (action.type) {
    case 'SET_STORE_STATE':
      return {
        ...old_state,
        ...action.payload,
      };
    case 'ADD_TODO':
      const new_id =
        old_state.todos.length === 0
          ? 0
          : old_state.todos[old_state.todos.length - 1].id + 1;
      const new_todo = { td: new_id, name: action.payload, done: false };
      return {
        ...old_state,
        todos: [...old_state.todos, new_todo],
      };
  }

  return old_state;
};
