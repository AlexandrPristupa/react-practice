import {GET_COLUMNS, ADD_COLUMNS, ADD_CARD} from './../actions/actionsTypes';
import {columnsMock} from '../config/constans';

const columns = (state = columnsMock, action) => {
  switch (action.type) {

    case ADD_COLUMNS:

      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          cards: action.payload.cards
        }
      ];

    case ADD_CARD:

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

    case GET_COLUMNS:
      return [...state];
    default:
      return state;
  }
};

export default columns;
