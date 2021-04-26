import { parseHTML } from '../lib/parseHTML.js';

export const Todo = (todo) => {
  const todo_item = parseHTML(
    `
    <li class="todo-item">
      <label class="todo-toggle__container">
        <input data-todo-id="${todo.id}" type="checkbox" class="todo-toggle" value="checked">
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name"></div>
      <div data-todo-id="1" class="todo-remove-button">x</div>
    </li>
    `
  );

  todo_item.querySelector('.todo-name').innerText = todo.name;

  return todo_item;
};
