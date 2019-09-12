import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { addTodo, checkTodo, getTodos } from '../actions/todoActions';

import SingleInputForm from '../components/SingleInputForm';
import TodoList from '../components/TodoList';

export default function TodoContainer() {
  const todos = useSelector(state => state.todos.todos);
  const isLoading = useSelector(state => state.todos.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch, todos.length]);

  const error = useSelector(state => state.todos.error);
  if (error) {
    window.alert('Something went wrong, please try again');
    dispatch(getTodos());
  }

  // Adding a new item to the todo
  const add = item => {
    dispatch(addTodo({ task: item }));
  };

  // Checking and adding last or unchecking and putting first in list
  const checkItem = todo => {
    const newTodo = { ...todo, finished: !todo.finished };
    dispatch(checkTodo(newTodo));
  };

  return (
    <div>
      <Container maxWidth="sm">
        <p>Add item</p>
        <SingleInputForm isLoading={isLoading} label="New todo:" submit={add} />
        <TodoList isLoading={isLoading} items={todos} checkItem={checkItem} />
      </Container>
    </div>
  );
}
