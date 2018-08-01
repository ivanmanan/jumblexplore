import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: []
    };
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  // When user registers account
  handleRegistration(e) {
    e.preventDefault();

    // On submit of the form, send a POST request with registration
    // data to the server
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

  render() {
    return (
      <div className="Login-Register">
        <form onSubmit={this.handleRegistration}>
          <div className="row">
            <div className={this.props.field_label}>
              <h2>Email</h2>
            </div>
            <div className={this.props.field_input}>
              <input autoFocus type="email" ref="email"/>
            </div>
          </div>
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
                <p>Register</p>
              </button>
            </div>
          </div>
          <div className="row" id="Login-Register-link">
            <div className="text-center
              col-md-12
              col-sm-12
              col-xs-12">
              <h4>Already have an account?
                <br/>
                <a onClick={this.props.logout}>Sign in here</a>
              </h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
