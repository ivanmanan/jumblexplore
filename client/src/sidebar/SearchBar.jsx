import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  handleUserSearch(e) {
    e.preventDefault();

    // This is probably callback to parent component
    console.log("Do nothing");
  }

  render() {
    return (
      <div id="Search">
        <form>
          <input
            id="SearchBar"
            type="text"
            placeholder="Search User"
            value={this.props.username}
            onChange={this.handleUserSearch}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;