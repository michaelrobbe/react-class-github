import React, { Component } from 'react';

class Repo extends Component {

    render() {
        console.log('Repo', this.props)
        return (
            <div>
                <li><b><a href={this.props.repo.html_url}>{this.props.repo.name}</a>:</b> {this.props.repo.description}</li>
            </div>
        );
    }
}

export default Repo;
