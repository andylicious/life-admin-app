import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { addTodo, checkTodo, getTodos } from '../actions/todoActions';

import SingleInputForm from '../components/SingleInputForm';
import TodoList from '../components/TodoList';

export default function TodoContainer() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, todos.length]);

  // Adding a new item to the todo
  const add = item => {
    const newTodo = { task: item, finished: false };
    dispatch(addTodo(newTodo));
  };

  // Checking and adding last or unchecking and putting first in list
  const checkItem = (status, id) => {
    const newTodo = status
      ? [...todos, { task: todos[id].task, finished: status }]
      : [{ task: todos[id].task, finished: status }, ...todos];
    const cleaned = newTodo.filter((_, key) => (status ? key !== id : key !== id + 1));
    dispatch(checkTodo(cleaned));
  };

  return (
    <div>
      <Container maxWidth="sm">
        <p>Add item</p>
        <SingleInputForm label="New todo:" submit={add} />
        <TodoList items={todos} checkItem={checkItem} />
      </Container>
    </div>
  );
}
