import * as actionsTypes from './actionsTypes';

export const addColumn = payload => {
  return {
      type: actionsTypes.ADD_COLUMNS,
      payload: payload
  }
};

export const getColumns = payload => {
    return {
        type: actionsTypes.GET_COLUMNS,
        payload: payload
    }
};

export const addCard = payload => {
    return {
        type: actionsTypes.ADD_CARD,
        payload: payload
    }
};
