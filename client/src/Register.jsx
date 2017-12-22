import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: []
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  // When user registers account
  handleSubmit(e) {
    e.preventDefault();

    // On submit of the form, senda POST request with registration data
    // to the server
    fetch('/register', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: this.refs.email.value,
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then(res => res.json())
      .then(userinfo => this.setState({ userLogin: userinfo }, () => {

        // If registration was successful
        if (this.state.userLogin[0]) {
          sessionStorage.setItem('loggedIn', true);
          sessionStorage.setItem('username', this.state.userLogin[0].username);
          sessionStorage.setItem('user_id', this.state.userLogin[0].user_id);
          this.props.login();
        }
        else { // Registration failed - i.e. duplicate username or email
          // Render invalid message above login button
          console.log("Error login!");
        }
      }));
  }

  // Need to fix css and register input forms to fit within smaller space
  render() {
    return (
      <div className="Register">
        <form onSubmit={this.onSubmit}>
          <div className="login-row row">
            <div className="text-right
              col-md-4
              col-sm-4
              col-xs-4">
              <h2>Email</h2>
            </div>
            <div className="text-center
              col-md-4
              col-sm-4
              col-xs-4">
              <input autoFocus type="email" ref="email"/>
            </div>
          </div>
          <div className="login-row row">
            <div className="text-right
              col-md-4
              col-sm-4
              col-xs-4">
              <h2>Username</h2>
            </div>
            <div className="text-left
              col-md-4
              col-sm-4
              col-xs-4">
              <input type="text" ref="username" required/>
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
              <input type="password" ref="password" required/>
            </div>
            <div className="login-button-container text-right
              col-md-3
              col-sm-3
              col-xs-3">
              <button className="login-button">
                <p>Register</p>
              </button>
            </div>
          </div>
          <div className="row" id="register">
            <h4>Already have an account? <a onClick={this.props.logout}>Sign in here</a>
            </h4>
          </div>
        </form>


      </div>
    );
  }
}

export default Register;