import { columnsMock } from './../constans'


const columns = (state = columnsMock, action) => {
    switch (action.type) {
        case "ADD_COLUMNS":
            return [...state];
        case "GET_COLUMNS":
            return [...state];
        default:
            console.log(state);
            return state;
    }
};

export default columns;
