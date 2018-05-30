import { columnsMock } from './../constans';
import { GET_COLUMNS, ADD_COLUMNS, ADD_CARD } from './../actions/actionsTypes';


const columns = (state = columnsMock, action) => {
    switch (action.type) {
        case ADD_COLUMNS:
            return [...state];
        case ADD_CARD:
            return [...state];
        case GET_COLUMNS:
            return [...state];
        default:
            console.log(state);
            return state;
    }
};

export default columns;
