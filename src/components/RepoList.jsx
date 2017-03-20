import React, { Component } from 'react';
import Repo from './Repo';

class RepoList extends Component {

    render() {
        console.log('props', this.props);
        return (
          <div>
            <ul>
                {
                    this.props.userRepos.map((repo, i) => {
                        return <Repo i={i} repo={repo} />
                    })
                }
            </ul>
          </div>
        );
    }
}

export default RepoList;
