export default function shows(state = [], action) {
    switch(action.type) {
        case 'GET_TV_SHOWS':
            return action.shows;
        default:
            return state;
    }
}