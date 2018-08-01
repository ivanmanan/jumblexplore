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
      <div className="Login-Register">
        <form onSubmit={this.handleLogin}>
          <div className="row">
            <div className={this.props.field_label}>
              <h2>Username</h2>
            </div>
            <div className={this.props.field_input}>
              <input type="text" ref="username" required/>
            </div>
          </div>
          <div className="row">
            <div className={this.props.field_label}>
              <h2>Password</h2>
            </div>
            <div className={this.props.field_input}>
              <input type="password" ref="password" required/>
            </div>
          </div>
          <div className="row">
            <div className={this.props.button_box}>
              <button className="multiuse-button">
                <p>Login</p>
              </button>
            </div>
          </div>
          <div className="row" id="Login-Register-link">
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
