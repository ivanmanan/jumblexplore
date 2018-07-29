import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import Omnibox from './Omnibox';
import View from './View';

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
          <div>
            <View name={this.props.name}/>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Sidebar;