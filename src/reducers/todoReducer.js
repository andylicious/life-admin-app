import {
  ADD_TODO,
  CHECK_TODO,
  GET_TODOS,
  GET_TODOS_FAILURE,
  ADD_TODO_FAILURE,
  CHECK_TODO_FAILURE,
} from '../actions/todoActions';

const initialState = {
  todos: [],
  error: false,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.data, ...state.todos],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: true,
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [...state.todos],
      };
    case CHECK_TODO_FAILURE:
      return {
        ...state,
        error: true,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload.data,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        todos: action.payload,
        error: true,
      };
    default:
      return state;
  }
}
