import * as actionsTypes from './../actions/actionsTypes';
import { columnsMock } from '../config/constans';

const columns = (state = columnsMock, action) => {
  switch (action.type) {

    case actionsTypes.ADD_COLUMN:

      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          cards: action.payload.cards
        }
      ];

    case actionsTypes.DELETE_COLUMN:

      return state.filter((column) => {
        if (column.id !== action.payload) {
          return [
            ...columns
          ];
        }
      });

    case actionsTypes.ADD_CARD:

      return state.map((column) => {
        if (column.id === action.payload.columnId) {
          return {
            ...column,
            cards: [
              ...column.cards,
              {
                id: action.payload.id,
                name: action.payload.name
              }
            ]
          }
        }
        return column;
      });

    case actionsTypes.DELETE_CARD:

      return state.map((column) => {
        if(column.id === action.payload.columnId) {
          return {
            ...column,
              cards: column.cards.filter((card) => card.id !== action.payload.cardId),
              id: column.id,
              name: column.name
            }
        }
        return {
          ...column
        }
      });

    case actionsTypes.GET_COLUMNS:

      return [
        ...state
      ];
      
    default:
      return state;
  }
};

export default columns;
