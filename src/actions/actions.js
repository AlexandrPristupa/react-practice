import { ADD_COLUMNS, GET_COLUMNS, ADD_CARD } from './actionsTypes';

export const addColumn = (value) => {
  return {
      type: ADD_COLUMNS,
      payload: value
  }
};

export const getColumns = (value) => {
    return {
        type: GET_COLUMNS,
        payload: value
    }
};

export const addCard = (value) => {
    return {
        type: ADD_CARD,
        payload: value
    }
};
