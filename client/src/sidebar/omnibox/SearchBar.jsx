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
      <div>
        <form onSubmit={this.handleUserSearch}>
          <input
            id="SearchBar"
            type="text"
            placeholder="Search Place or User"
            value={this.props.username}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;