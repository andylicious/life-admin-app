import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from '@material-ui/core/Container';
import SingleInputForm from './components/SingleInputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Add item</p>
        <SingleInputForm label="New todo:" submit="add" />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
