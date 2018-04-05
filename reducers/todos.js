import { 
    ADD_TODO,
    REMOVE_TODO 
} from 'actions/todos/constants';

const inititalState = [];

export default function todos(state = inititalState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                { id : Math.random(), description: action.description }
            ];
        case REMOVE_TODO: {
            const todos = state.filter(todo => todo.id !== action.id);
            
            return [ ...todos ];
        }
        default:
            return state;
    }
}