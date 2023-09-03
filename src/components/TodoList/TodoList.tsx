import React from "react";
import PropTypes from "prop-types";
import { interfaceTodoList } from "../interfaces/interface/ToDoList";

interface prop {
  task:interfaceTodoList[];
} 
function TodoList(todos:prop):JSX.Element {
  return (
    <ul>
      {todos.task.splice(0,5).map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
