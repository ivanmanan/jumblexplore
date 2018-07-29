import React, { Component } from 'react';

class View extends Component {

  render() {
    return (
      <div className="View">
        <h1>{this.props.name}</h1>
        <p>
          "I'm happy for the
          first time in my life and I'm not going to feel bad
          about it. It takes a long time to realize how truly
          miserable you are, and even longer to see that it
          doesn't have to be that way. Only after you give up
          everything, can you begin to find a way to be happy."
        </p>
      </div>
    );
  }
}

export default View;