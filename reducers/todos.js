export default function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { id : Math.random(), description: action.description }
            ];
        case 'REMOVE_TODO': {
            const todos = state.filter(todo => todo.id !== action.id);
            
            return [ ...todos ];
        }
        default:
            return state;
    }
}