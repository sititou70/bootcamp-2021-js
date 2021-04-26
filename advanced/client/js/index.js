import { App } from './components/App.js';
import ReactDOM from './lib/react.js';
import { Store } from './lib/redux.js';
import middlewares from './middlewares/middlewares.js';
import { reducer } from './reducer/reducer.js';

const main = () => {
  const store = new Store({ todos: [] }, reducer, middlewares);

  const AppConteiner = () => App(store);
  ReactDOM.render(AppConteiner, document.querySelector('main'));

  store.dispatch({ type: 'LOAD_TODOS' });
};

main();
