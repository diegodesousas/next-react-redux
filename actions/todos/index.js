import { 
    ADD_TODO, 
    REMOVE_TODO 
} from './constants';

export function addTodo(description) {
    return  {
        type: ADD_TODO,
        description
    }
};

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
};