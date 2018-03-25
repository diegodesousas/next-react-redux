export function addTodo(description) {
    return  {
        type: 'ADD_TODO',
        description
    }
};

export function removeTodo(id) {
    return {
        type: 'REMOVE_TODO',
        id
    }
};