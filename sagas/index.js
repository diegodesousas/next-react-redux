import { takeEvery, put } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';

function* asyncGetTvShows(action) {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = yield res.json();

    yield put({ type: 'GET_TV_SHOWS', shows: data });
}

export default function* root() {
    yield [
        takeEvery('ASYNC_GET_TV_SHOWS', asyncGetTvShows)
    ];
};
