import React, { Component } from 'react';

class Search extends Component {

    // constructor(props) {
    //     super(props);
    // }

    onSubmitMe(e) {
      e.preventDefault();

      let username = this.refs.username.value;

      if (!username) {
        alert('please enter the username');
        return;
      }

      this.props.onFormSubmit(username);
    }

    render() {
        return (
          <form onSubmit={this.onSubmitMe.bind(this)} className="form-horizontal" role="form">
              <div className="form-group">
                <legend>Search Github Users</legend>
              </div>

              <div className="form-group">
                <div className="col-sm-10">
                  <input type="text" ref="username" className="form-control" />
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button type="submit" className="btn form-control btn-primary">Submit</button>
                </div>
              </div>
          </form>
        );
    }
}

export default Search;
