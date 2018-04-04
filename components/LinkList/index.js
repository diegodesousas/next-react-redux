import React, { Component } from 'react';

import { connect } from 'react-redux';

import Link from 'next/link';

class LinkList extends Component {

    render() {
        return (
            <ul>
                {this.props.shows.map(({ show }) => (
                    <li key={show.id}>
                        <Link as={`/bat-post/${show.id}`} href={`/batman-tv-show?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({ shows : state.shows.all });

export default connect(mapStateToProps)(LinkList);