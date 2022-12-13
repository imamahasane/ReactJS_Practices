import React, { useState } from 'react';

import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ['todo-1', 'todo-2'];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
