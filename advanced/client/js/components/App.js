import { parseHTML } from '../lib/parseHTML.js';
import { Todos } from './Todos.js';

export const App = (store) => {
  const title = parseHTML(`<div class="hero">TODO-Manager</div>`);

  const form_wrapper = parseHTML(`
    <div class="todo-form__wrapper">
      <form method="POST" action="/todos" class="todo-form">
        <label for="name" class="todo-form__label">TODO</label>
        <div class="todo-form-input__wrapper">
          <input id="name" name="name" type="text" class="todo-form__input">
          <input type="submit" class="todo-form__submit" value="Submit">
        </div>
      </form>
    </div>`);

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
