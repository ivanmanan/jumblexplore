import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: []
    };

    this.onSubmit = this.handleSubmit.bind(this);
  }

  // When user logs in
  handleSubmit(e) {
    e.preventDefault();

    // On submit of the form, send a POST request with login data to the server.
    fetch('/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then(res => res.json())
      .then(userinfo => this.setState({ userLogin: userinfo }, () => {

        // If login was successful
        if (this.state.userLogin[0]) {
          sessionStorage.setItem('loggedIn', true);
          sessionStorage.setItem('username', this.state.userLogin[0].username);
          sessionStorage.setItem('user_id', this.state.userLogin[0].user_id);
          this.props.login();
        }
        else { // If login failed
          // Render invalid message above login button
          console.log("Error login!");
        }
      }));
  }


  // When user tries to sign-up, just make a modal on top of the Maps screen
  // This is the POST request to insert into database
  // Then trigger the login successful

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <div className="login-row row">
            <div className="text-right
              col-md-4
              col-sm-4
              col-xs-4">
              <h2>Username</h2>
            </div>
            <div className="text-center
              col-md-4
              col-sm-4
              col-xs-4">
              <input autoFocus type="text" ref="username"/>
            </div>
          </div>
          <div className="login-row row">
            <div className="text-right
              col-md-4
              col-sm-4
              col-xs-4">
              <h2>Password</h2>
            </div>
            <div className="text-left
              col-md-4
              col-sm-4
              col-xs-4">
              <input type="password" ref="password"/>
            </div>
            <div className="login-button-container text-right
              col-md-3
              col-sm-3
              col-xs-3">
              <button className="login-button">
                <p>Login</p>
              </button>
            </div>
          </div>
          <div className="row">
            <h4>No account? <a>Signup here</a></h4>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;