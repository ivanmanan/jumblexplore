import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: []
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  // When user logs in
  handleLogin(e) {
    e.preventDefault();

    // On submit of the form, send a POST request with login
    // data to the server.
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

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleLogin}>

          <div className="row">
            <div className="text-right
              col-md-3 col-md-offset-1
              col-sm-3 col-sm-offset-1
              col-xs-3 col-xs-offset-1">
              <h2>Username</h2>
            </div>
            <div className="text-left
              col-md-7
              col-sm-7
              col-xs-7">
              <input type="text" ref="username" required/>
            </div>
          </div>
          <div className="row">
            <div className="text-right
              col-md-3 col-md-offset-1
              col-sm-3 col-sm-offset-1
              col-xs-3 col-xs-offset-1">
              <h2>Password</h2>
            </div>
            <div className="text-left
              col-md-7
              col-sm-7
              col-xs-7">
              <input type="password" ref="password" required/>
            </div>
          </div>
          <div className="row">
            <div className="login-button-container text-center
              col-md-5 col-md-offset-5
              col-sm-3 col-sm-offset-5
              col-xs-3 col-xs-offset-5">
              <button className="login-button">
                <p>Login</p>
              </button>
            </div>
          </div>

          <div className="row" id="Register-link">
            <div className="text-center
              col-md-12
              col-sm-12
              col-xs-12">
              <h4>
                No account? <a onClick={this.props.register}>Signup here</a>
              </h4>
            </div>
          </div>



        </form>
      </div>
    );
  }
}

export default Login;
