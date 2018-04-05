import withRedux from 'next-redux-wrapper';
import store from 'store';

import DefaultLayout from 'layouts';
import TodoList from 'components/TodoList';
import TodoCounter from 'components/TodoCounter';
import Link from 'next/link';

const HomePage = () => (
    <DefaultLayout>
        <Link href="/about">
            <a>About Page</a> 
        </Link>

        <Link href="/batman-tv-shows">
            <a>Batman TV Shows</a> 
        </Link>

        <TodoList />
        <TodoCounter />
    </DefaultLayout>
);

export default withRedux(store)(HomePage);