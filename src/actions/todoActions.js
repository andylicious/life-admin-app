import axios from 'axios';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const addTodo = data => dispatch => {
  dispatch({ type: ADD_TODO_REQUEST });

  axios
    .post('http://localhost:5000/api/v1/todos', data)
    .then(res => dispatch({ type: ADD_TODO, payload: res.data }))
    .catch(err => dispatch({ type: ADD_TODO_FAILURE, payload: err }));
};

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

export const getTodos = () => dispatch => {
  dispatch({ type: GET_TODOS_REQUEST });

  axios
    .get('http://localhost:5000/api/v1/todos/sorted')
    .then(res => dispatch({ type: GET_TODOS, payload: res.data }))
    .catch(err => dispatch({ type: GET_TODOS_FAILURE, payload: err }));
};

export const CHECK_TODO_REQUEST = 'CHECK_TODO_REQUEST';
export const CHECK_TODO = 'CHECK_TODO';
export const CHECK_TODO_FAILURE = 'CHECK_TODO_FAILURE';

export const checkTodo = data => dispatch => {
  dispatch({ type: CHECK_TODO_REQUEST });

  axios
    .put(`http://localhost:5000/api/v1/todos/${data._id}`, data)
    .then(res => dispatch({ type: CHECK_TODO, payload: res.data }))
    .catch(err => dispatch({ type: CHECK_TODO_FAILURE, payload: err }))
    .then(() => dispatch(getTodos()));
};

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO_REQUEST });

  axios
    .delete(`http://localhost:5000/api/v1/todos/${id}`)
    .then(() => dispatch({ type: DELETE_TODO }))
    .catch(err => dispatch({ type: DELETE_TODO_FAILURE, payload: err }))
    .then(() => dispatch(getTodos()));
};
