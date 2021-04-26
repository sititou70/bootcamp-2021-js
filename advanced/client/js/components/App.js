import { parseHTML } from '../lib/parseHTML.js';
import { Todos } from './Todos.js';
import { TodoForm } from './TodoForm.js';

export const App = (store) => {
  const title = parseHTML(`<div class="hero">TODO-Manager</div>`);

  const form_wrapper = parseHTML(`<div class="todo-form__wrapper"></div>`);
  const onSubmit = (name) =>
    store.dispatch({ type: 'POST_TODO', payload: name });
  form_wrapper.appendChild(TodoForm(onSubmit));

  const todos_wrapper = parseHTML(`<div class="todos__wrapper"></div>`);
  todos_wrapper.appendChild(Todos(store.state.todos));

  const footer = parseHTML(`
    <div class="todo-footer">
      <div class="done-items-num">
        <span class="done-items-num__value">0</span><span> items done</span>
      </div>
    </div>`);

  return [title, form_wrapper, todos_wrapper, footer];
};
