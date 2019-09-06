import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import SingleInputForm from './components/SingleInputForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { task: 'Walk the dog', finished: false },
    { task: 'Grocery shopping', finished: false },
    { task: 'Dinner with Mona', finished: false },
    { task: 'Hit the gym', finished: false },
  ]);

  const addTodo = item => {
    const newTodo = [{ task: item, finished: false }, ...todos];
    setTodos(newTodo);
  };

  const checkItem = (status, id) => {
    const newTodo = status
      ? [...todos, { task: todos[id].task, finished: status }]
      : [{ task: todos[id].task, finished: status }, ...todos];
    const cleaned = newTodo.filter((_, key) => (status ? key !== id : key !== id + 1));
    setTodos(cleaned);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <p>Add item</p>
        <SingleInputForm label="New todo:" submit={addTodo} />
        <TodoList items={todos} checkItem={checkItem} />
      </Container>
    </div>
  );
}

export default App;
