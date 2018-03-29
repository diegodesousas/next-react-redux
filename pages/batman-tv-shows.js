import withRedux from 'next-redux-wrapper';
import withSaga from 'next-redux-saga';
import withReduxSaga from '../withReduxSaga';

import store from '../store';

import React, { Component } from 'react';
import Link from 'next/link';

import LinkList from '../components/LinkList';

class Batman extends Component {

    static async getInitialProps({ store }) {
        await store.dispatch({ type: 'ASYNC_GET_TV_SHOWS' });
    }

    render() {
        return (
            <div>
                <h1>Batman TV Shows</h1>
                <LinkList />
            </div>
        );
    };
};

export default withRedux(store)(withReduxSaga(Batman));