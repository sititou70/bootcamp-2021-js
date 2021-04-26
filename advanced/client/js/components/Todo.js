import { parseHTML } from '../lib/parseHTML.js';

export const Todo = (todo) => {
  const result = parseHTML(
    `
    <li class="todo-item">
      <label class="todo-toggle__container">
        <input data-todo-id="${
          todo.id
        }" type="checkbox" class="todo-toggle" value="${
      todo.done ? 'checked' : ''
    }">
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name">${todo.name}</div>
      <div data-todo-id="1" class="todo-remove-button">x</div>
    </li>
    `
  );

  return result;
};
