import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import Omnibox from './Omnibox';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.revealSidebar = this.revealSidebar.bind(this);
  }

  revealSidebar() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="Sidebar-container
        col-md-3
        col-sm-5
        col-xs-8">


        <Omnibox revealSidebar={this.revealSidebar}/>


        <Collapse id="Sidebar" in={this.state.open}>
          <div >
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
        </Collapse>
      </div>
    )
  }
}

export default Sidebar;