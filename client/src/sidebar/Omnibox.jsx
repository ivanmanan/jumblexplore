import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import SearchBar from './SearchBar';
import { Collapse } from 'react-bootstrap';

class Omnibox extends Component {

  render() {
    return (
      <div className="Omnibox-container row">
        <Button id="Menu-Button" onClick={this.props.revealSidebar}>
          <center>
            <i className="fa fa-bars"></i>
          </center>
        </Button>
        <Collapse in={this.props.open}>
          <div>
            <SearchBar/>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Omnibox;