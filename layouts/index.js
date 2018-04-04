import React, { Component } from 'react';

export default class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <h1>MeuCupom.com</h1>
                {this.props.children}
            </div>
        );
    }
};