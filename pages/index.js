import withReduxSaga from '../withReduxSaga';

import TodoList from '../components/TodoList';
import TodoCounter from '../components/TodoCounter';
import Link from 'next/link';

const HomePage = () => (
    <div>
        <Link href="/about">
            <a>About Page</a> 
        </Link>

        <Link href="/batman-tv-shows">
            <a>Batman TV Shows</a> 
        </Link>

        <TodoList />
        <TodoCounter />
    </div>
);

export default withReduxSaga(HomePage);