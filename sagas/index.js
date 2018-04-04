import { all } from 'redux-saga/effects';
import { showSagas } from './shows';

export default function* root() {
    yield all([
        ...showSagas
    ]);
};
