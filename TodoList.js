import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos').then((response) => setTodos(response.data));
  }, []);

  const addTodo = (task) => {
    axios.post('/api/todos', { task }).then((response) => setTodos([...todos, response.data]));
  };

  const removeTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then(() => setTodos(todos.filter((todo) => todo._id !== id)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
