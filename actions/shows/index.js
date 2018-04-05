import { 
    GET_TV_SHOW_BY_ID, 
    GET_TV_SHOWS ,
    ASYNC_GET_TV_SHOW_BY_ID,
    ASYNC_GET_TV_SHOWS
} from './constants';

export function getTvShow(show) {
    return {
        type: GET_TV_SHOW_BY_ID,
        show
    };
};

export function getTvShows(shows) {
    return {
        type: GET_TV_SHOWS,
        shows
    };
};

export function asyncGetTvShowById(id) {
    return {
        type: ASYNC_GET_TV_SHOW_BY_ID,
        id
    };
}

export function asyncGetTvShows() {
    return {
        type: ASYNC_GET_TV_SHOWS
    };
}