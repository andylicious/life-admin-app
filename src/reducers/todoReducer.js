import {
  ADD_TODO,
  CHECK_TODO,
  GET_TODOS,
  GET_TODOS_FAILURE,
  ADD_TODO_FAILURE,
  CHECK_TODO_FAILURE,
  ADD_TODO_REQUEST,
  CHECK_TODO_REQUEST,
  GET_TODOS_REQUEST,
} from '../actions/todoActions';

const initialState = {
  todos: [],
  error: false,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.data, ...state.todos],
        isLoading: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case CHECK_TODO_REQUEST:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: [...state.todos],
        isLoading: false,
      };
    case CHECK_TODO_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload.data,
        isLoading: false,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
