import * as actionsTypes from './actionsTypes';

export const addColumn = payload => {
  return {
      type: actionsTypes.ADD_COLUMN,
      payload: payload
  }
};

export const deleteColumn = payload => {
    return {
        type: actionsTypes.DELETE_COLUMN,
        payload: payload
    }
}

export const addCard = payload => {
    return {
        type: actionsTypes.ADD_CARD,
        payload: payload
    }
};

export const deleteCard = payload => {
    return {
        type: actionsTypes.DELETE_CARD,
        payload: payload
    }
}

export const getColumns = payload => {
    return {
        type: actionsTypes.GET_COLUMNS,
        payload: payload
    }
};
