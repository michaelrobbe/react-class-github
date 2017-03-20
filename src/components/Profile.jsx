import React, { Component } from 'react';
import RepoList from './RepoList';

class Profile extends Component {

    render() {
        return (
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.userData.name} <span className="label label-info">{this.props.userData.public_repos} Repos</span> <span className="label label-primary">{this.props.userData.public_gists} Public Gists</span> <span className="label label-success">{this.props.userData.followers} Followers</span> <span className="label label-default">{this.props.userData.following} Following</span></h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={this.props.userData.avatar_url} alt="" className="thumbnail" style={{width: "100%"}} />
                  </div>
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Username:</strong> {this.props.userData.login}</li>
                      <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                      <li className="list-group-item"><strong>Email:</strong> {this.props.userData.email}</li>
                    </ul>

                    <a href={this.props.userData.html_url} type="button" className="btn btn-primary">View Profile</a>

                  </div>
                </div>
              </div>


              <hr />
              <div className="page-header container">
                <h3>User Repos</h3>
                <RepoList {...this.props} />
              </div>

            </div>
          </div>
        );
    }
}

export default Profile;
