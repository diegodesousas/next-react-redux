import { showSagas } from './shows';

export default function* root() {
    yield [
        ...showSagas
    ];
};
