import { takeLatest, put } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

import { getTvShows, getTvShow } from '../actions/shows';
import { 
    ASYNC_GET_TV_SHOW_BY_ID, 
    ASYNC_GET_TV_SHOWS 
} from '../actions/shows/constants';

function* asyncGetTvShows(action) {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');
    const shows = yield res.json();

    yield put(getTvShows(shows));
};

function* asyncGetTvShowById(action) {
    const { id } = action;
    const res = yield fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = yield res.json();
    
    yield put(getTvShow(show));
}

export const showSagas = [ 
    takeLatest(ASYNC_GET_TV_SHOWS, asyncGetTvShows),
    takeLatest(ASYNC_GET_TV_SHOW_BY_ID, asyncGetTvShowById),
];