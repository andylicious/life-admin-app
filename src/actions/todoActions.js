import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addTodo = data => dispatch => {
  axios
    .post('http://localhost:5000/api/v1/todos', data)
    .then(res => dispatch({ type: ADD_TODO, payload: res.data }))
    .catch(err => dispatch({ type: ADD_TODO_FAILURE, payload: err }));

  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const CHECK_TODO = 'CHECK_TODO';

export const checkTodo = data => {
  return {
    type: CHECK_TODO,
    payload: data,
  };
};

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export const getTodos = () => dispatch => {
  axios
    .get('http://localhost:5000/api/v1/todos')
    .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
    .catch(err => dispatch({ type: GET_TODOS_FAILURE, payload: err }));
};
