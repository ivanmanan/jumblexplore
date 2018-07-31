import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import Omnibox from './Omnibox';
import View from './View';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // DEV: For developing purposes; leave sidebar open at all times
    // When distributing, make sure to change it to false
    this.state = {
      open: true
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
        col-md-4
        col-sm-10
        col-xs-10">


        <Omnibox revealSidebar={this.revealSidebar}
                 open={this.state.open}/>


        <Collapse id="Sidebar" in={this.state.open}>
          <div>
            <View name={this.props.name}
                  viewSelection={this.props.viewSelection}/>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Sidebar;