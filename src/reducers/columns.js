import * as types from './../types/types';
import { columnsMock } from '../config/constans';

const columns = (state = columnsMock, action) => {
  switch (action.type) {

    case types.ADD_COLUMN:

      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          cards: action.payload.cards
        }
      ];

    case types.DELETE_COLUMN:

      return state.filter((column) => {
        if (column.id !== action.payload) {
          return [
            ...columns
          ];
        }
      });

    case types.ADD_CARD:

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

    case types.DELETE_CARD:

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

    case types.GET_COLUMNS:
    
      return [
        ...state
      ];
    default:
      return state;
  }
};

export default columns;
