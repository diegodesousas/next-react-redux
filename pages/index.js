import withRedux from 'next-redux-wrapper';
import store from '../store';

import TodoList from '../components/TodoList';
import TodoCounter from '../components/TodoCounter';
import Link from 'next/link';

const HomePage = () => (
    <div>
        <Link href="/about">
            <a>About Page</a> 
        </Link>

        <TodoList />
        <TodoCounter />
    </div>
);

export default withRedux(store)(HomePage);