import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';
import RouteWrapper from './RouteWrapper';
import { addTodo, checkTodo, getTodos, deleteTodo } from '../actions/todoActions';

import SingleInputForm from '../components/SingleInputForm';
import TodoList from '../components/TodoList';

// const Container = styled.div`
//   width: 70%;
// `;

export default function TodoContainer() {
  const todos = useSelector(state => state.todos.todos);
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

  const deleteItem = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <RouteWrapper title="Todo List" size="sm">
      <div>
        <SingleInputForm label="New todo:" submit={add} />
        <TodoList items={todos} checkItem={checkItem} deleteTodo={deleteItem} />
      </div>
    </RouteWrapper>
  );
}
