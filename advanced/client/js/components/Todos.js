import { parseHTML } from '../lib/parseHTML.js';
import { Todo } from './Todo.js';

export const Todos = (todos) => {
  const ul = parseHTML(`<ul class="todos"></ul>`);
  todos.map((x) => Todo(x)).forEach((x) => ul.appendChild(x));
  return ul;
};
