import { 
    GET_TV_SHOW_BY_ID, 
    GET_TV_SHOWS 
} from '../actions/shows/constants';

const initialState = {
    all: [],
    currentShow: null
};

export default function shows(state = initialState, action) {
    switch(action.type) {
        case GET_TV_SHOWS:
            return { ...state, all: action.shows };
        case GET_TV_SHOW_BY_ID:
            return { ...state, currentShow: action.show }; 
        default:
            return state;
    };
};