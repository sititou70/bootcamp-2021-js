const API_HOST = 'http://localhost:3000';

export const initAppMiddleware = (store, action) => {
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

const middlewares = [initAppMiddleware];
export default middlewares;
