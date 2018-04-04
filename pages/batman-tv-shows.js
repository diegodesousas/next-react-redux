import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import store from '../store';

import DefaultLayout from '../layouts';

import React, { Component } from 'react';
import Link from 'next/link';

import LinkList from '../components/LinkList';

class Batman extends Component {

    static async getInitialProps({ store }) {
        await store.dispatch({ type: 'ASYNC_GET_TV_SHOWS' });
    };

    render() {
        return (
            <DefaultLayout>
                <h2>Batman TV Shows</h2>
                <LinkList />
            </DefaultLayout>
        );
    };
};

export default withRedux(store)(withReduxSaga(Batman));