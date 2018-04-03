import React, { Component } from 'react';
import { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import store from './store';

function hoc(config) {
  return BaseComponent => {
    class WrappedComponent extends Component {
      static async getInitialProps(context) {
        
        const { isServer, store } = context;
        
        let props;

        if (BaseComponent.getInitialProps) {
          props = await BaseComponent.getInitialProps(context);
        }

        // Keep saga running on the client (async mode)
        if (config.async && !isServer) {
          return props;
        }

        // Force saga to end in all other cases
        store.dispatch(END);
        await store.sagaTask.done;

        // Restart saga on the client (sync mode)
        if (!isServer) {
          store.runSagaTask();
        }

        return props;
      }

      render() {
        return <BaseComponent { ...this.props } />
      }
    }

    return withRedux(store)(WrappedComponent);
  }
}

function withReduxSaga(arg) {
  const defaultConfig = { async: false };

  if (typeof arg === 'function') {
    return hoc(defaultConfig)(arg);
  }

  return hoc({ ...defaultConfig, ...arg });
}

export default withReduxSaga;