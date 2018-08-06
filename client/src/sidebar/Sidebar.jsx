import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';

import Omnibox from './omnibox/Omnibox';
import View from './View';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_menu: false, // DEV: Default is false
      open_search: true // DEV: Default is true
    };
    this.revealSidebar = this.revealSidebar.bind(this);
    this.revealSearchbar = this.revealSearchbar.bind(this);
  }

  revealSidebar() {
    this.setState({
      open_menu: !this.state.open_menu
    });
  }

  revealSearchbar() {
    this.setState({
      open_search: !this.state.open_search
    });
  }

  render() {
    return (
      <div className="Sidebar-container
        col-md-7
        col-sm-8
        col-xs-8">
        <Omnibox revealSidebar={this.revealSidebar}
                 revealSearchbar={this.revealSearchbar}
                 open_search={this.state.open_search}
                 placeSearch={this.props.placeSearch}/>
        <Collapse id="Sidebar" in={this.state.open_menu}>
          <div>
            <View view={this.props.view}
                  loggedIn={this.props.loggedIn}
                  username={this.props.username}
                  login={this.props.login}
                  logout={this.props.logout}
                  register={this.props.register}
                  user_id={this.props.user_id}
                  search={this.props.search}
                  editPlace={this.props.editPlace}
                  editPlace_id={this.props.editPlace_id}
                  editDate={this.props.editDate}
                  editCaption={this.props.editCaption}
                  updateDate={this.props.updateDate}
                  updateCaption={this.props.updateCaption}
                  clearPlace={this.props.clearPlace}
                  default_place_query={this.props.default_place_query}
                  revealSidebar={this.revealSidebar}
                  displaySavedPlaces={this.props.displaySavedPlaces}/>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Sidebar;