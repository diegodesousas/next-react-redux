import React, { Component } from 'react';;

import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import store from 'store';

import DefaultLayout from 'layouts';
import TvShow from 'components/TvShow';

import { asyncGetTvShowById } from 'actions/shows';

class BatmanTvShow extends Component {

    static async getInitialProps({ store, query }) {
      const { id } = query;

      await store.dispatch(asyncGetTvShowById(id));
    };

    render() {
      return  (
        <DefaultLayout>
          <TvShow show={this.props.currentShow} />
        </DefaultLayout>
      );
    }
};

const mapStateToProps = state => ({ currentShow: state.shows.currentShow });

export default withRedux(store, mapStateToProps)(withReduxSaga(BatmanTvShow));