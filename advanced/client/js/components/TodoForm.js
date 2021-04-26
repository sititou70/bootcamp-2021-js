import { parseHTML } from '../lib/parseHTML.js';

export const TodoForm = (onSubmit) => {
  const form = parseHTML(`
    <form method="POST" action="/todos" class="todo-form">
      <label for="name" class="todo-form__label">TODO</label>
      <div class="todo-form-input__wrapper">
        <input id="name" name="name" type="text" class="todo-form__input">
        <input type="submit" class="todo-form__submit" value="Submit">
      </div>
    </form>`);

  form.onsubmit = () => {
    const name = document.querySelector('#name').value;
    if (name === '') return false;

    onSubmit(name);

    return false;
  };

  return form;
};
