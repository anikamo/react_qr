import { useReducer } from 'react';

const EMPTY_HEADER = {
  key: '',
  value: '',
  enabled: true,
};

const reducer = (
  state,
  action,
) => {
  const headers = [...state.headers];
  switch (action.type) {
    case 'CHANGE_URL':
      return {
        ...state,
        url: action.payload,
      };
    case 'CHANGE_HEADER':
      headers[action.payload.index] = {
        ...headers[action.payload.index],
        [action.payload.field]: action.payload.value,
      };
      return {
        ...state,
        headers,
      };
    case 'DELETE_HEADER':
      return {
        ...state,
        headers: [
          ...headers.filter((_, index) => index !== action.payload.index),
        ],
      };
    case 'ADD_HEADER':
      return {
        ...state,
        headers: [
          ...headers,
          { ...EMPTY_HEADER },
        ],
      };
    default:
      return state;
  }
};

export const useFrom = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeUrl = (event) => dispatch({
    type: 'CHANGE_URL',
    payload: event.target.value,
  });

  const changeHeader = (index, field) => (event) => {
    let { value } = event.target;
    if (field === 'enabled') value = !state.headers[index].enabled;

    dispatch({
      type: 'CHANGE_HEADER',
      payload: { index, field, value },
    });
  };

  const deleteHeader = (index) => () => dispatch({
    type: 'DELETE_HEADER',
    payload: { index },
  });

  const addHeader = (index) => dispatch({
    type: 'ADD_HEADER',
    payload: { index },
  });

  return {
    state, changeUrl, changeHeader, deleteHeader, addHeader,
  };
};
