import ReactDOM from './react.js';

export class Store {
  state;
  reducer;
  middlewares;

  constructor(initial_state, reducer, middlewares) {
    this.state = initial_state;
    this.reducer = reducer;
    this.middlewares = middlewares;
  }

  dispatch(_action) {
    let action = _action;
    for (const middleware of this.middlewares) {
      action = middleware(this, action);
    }

    this.state = this.reducer(this.state, action);

    ReactDOM.doRender();
  }
}
