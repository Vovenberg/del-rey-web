import { createStore, combineReducers } from 'redux';

function exampleReducer(state = {}, action) {
    switch (action.type) {
        case 'SUCCESS':
            return {
                type: 'alert-success',
                message: action.message
            };
        case 'ERROR':
            return {
                type: 'alert-danger',
                message: action.message
            };
        case 'CLEAR':
            return {};
        default:
            return state
    }
}

const reducer = combineReducers({
    todoState: exampleReducer
})

const initialState = {
    todoState: [],
}

export const store = createStore(
    reducer,
    initialState
);