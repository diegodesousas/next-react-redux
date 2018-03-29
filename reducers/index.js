import { combineReducers } from 'redux';

import todos from './todos';
import shows from './shows';

export default combineReducers({
    todos,
    shows
});