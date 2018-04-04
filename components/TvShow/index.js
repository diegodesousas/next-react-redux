import React, { Component } from 'react';

class TvShow extends Component {
      
    render() {
        return (
            <div>
                <h2>{this.props.show.name}</h2>
                <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
                <img src={this.props.show.image.medium}/>
            </div>
        );
    };
};

export default TvShow;