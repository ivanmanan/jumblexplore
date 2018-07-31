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


  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleLogin}>

          <div className="row">
            <div className="text-right
              col-md-3
              col-sm-4
              col-xs-4">
              <h2>Username</h2>
            </div>
            <div className="text-left
              col-md-3
              col-sm-4
              col-xs-4">
              <input type="text" ref="username" required/>
            </div>
          </div>
          <div className="row">
            <div className="text-right
              col-md-3
              col-sm-4
              col-xs-4">
              <h2>Password</h2>
            </div>
            <div className="text-left
              col-md-3
              col-sm-4
              col-xs-4">
              <input type="password" ref="password" required/>
            </div>
          </div>
          <div className="row">
            <div className="login-button-container text-center
              col-md-5 col-md-offset-5
              col-sm-3
              col-xs-3">
              <button className="login-button">
                <p>Login</p>
              </button>
            </div>
          </div>

          <div className="row">
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
