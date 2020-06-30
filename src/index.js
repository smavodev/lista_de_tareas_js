import './styles.css';

import { Todo, TodoList } from './classes';


const todoList = new TodoList();

const tarea = new Todo('Aprendiendo JavaScript');
//console.log(tarea);


todoList.nuevoTodo( tarea);
console.log(todoList);