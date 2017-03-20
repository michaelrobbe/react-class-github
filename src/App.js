import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'michaelrobbe',
      userData: [],
      userRepos: []
    }
  }

  // Handles State Update, re-renders Profile/Repo info
  handleFormSubmit(username) {
    this.setState({username: username}, () => {
    this.getUserData();
    this.getUserRepos();
    });
  }

  // AJAX retrieval and storage of User Profile
  getUserData() {
    const url = `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`;

    fetch(url, {
      method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((j) => {
      this.setState({userData: j});
    }).catch((err) => {
      console.log('error is ', err)
    })
  }

  // AJAX retrieval and storage of User Repo list
  getUserRepos() {
    const url = `https://api.github.com/users/${this.state.username}/repos?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`;

    fetch(url, {
      method: 'GET',
    }).then((response) => {
      return response.json();
    }).then((j) => {
      this.setState({userRepos: j});
    }).catch((err) => {
      console.log('error is ', err)
    })
  }

  // Call on pageload
  componentDidMount() {

    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div className="container">
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

export default App;
