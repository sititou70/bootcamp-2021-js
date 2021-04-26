const API_HOST = 'http://localhost:3000';

const initAppMiddleware = (store, action) => {
  if (action.type === 'LOAD_TODOS') {
    (async () => {
      const res = await (await fetch(`${API_HOST}/todo`)).json();
      store.dispatch({
        type: 'SET_STORE_STATE',
        payload: { todos: res.todoList },
      });
    })();
  }

  return action;
};

const postTodoMiddleware = (store, action) => {
  if (action.type === 'POST_TODO') {
    (async () => {
      fetch(`${API_HOST}/todo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: action.payload }),
      });

      store.dispatch({
        type: 'ADD_TODO',
        payload: action.payload,
      });
    })();
  }

  return action;
};

const middlewares = [initAppMiddleware, postTodoMiddleware];
export default middlewares;
