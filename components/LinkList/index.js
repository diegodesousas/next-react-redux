import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

import Link from 'next/link';

class LinkList extends Component {

    render() {
        return (
            <ul>
                {this.props.shows.map(({ show }) => (
                    <li key={show.id}>
                        <Link as={`/bat-post/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = state => ({ shows : state.shows });

export default connect(mapStateToProps, mapDispatchToProps)(LinkList);