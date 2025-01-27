import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo.task} <button onClick={() => removeTodo(todo._id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
