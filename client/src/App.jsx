import React, { Component } from 'react';
import Sidebar from './sidebar/Sidebar';
import Maps from './Maps';

const DEFAULT_PLACE_QUERY = 'Search for a place in the map';

// Initial Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // DEV: Set default view to login
      view: "login",
      loggedIn: false,
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id'),
      places: [],
      userSearched: '',
      placeSearch: '',
      mapFocus: [34.0407, -118.2468],
      insertPlace: DEFAULT_PLACE_QUERY,
      insertLat: 0,
      insertLon: 0,
      mapZoom: 2
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.placeSearch = this.placeSearch.bind(this);
    this.potentialPlace = this.potentialPlace.bind(this);
    this.displaySavedPlaces = this.displaySavedPlaces.bind(this);
  }

  // Query that retrieves saved places
  // TODO: Make new state with all saved places
  // This will be passed as a prop for the map to display
  displaySavedPlaces() {
    console.log("Hello from App.jsx!");
    fetch('/saved', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.user_id,
        username: this.state.username
      })
    })
      .then(res => res.json())
      .then(places => {this.setState({ places: places })});
  }

  componentDidMount() {
    // If logged in, render Account component
    if (sessionStorage.getItem('loggedIn')) {

      // Retrieve saved places from database
      this.displaySavedPlaces();

      this.setState({
        view: "account",
        loggedIn: true
      });
    }
    else { // Otherwise, render Login component
      this.setState({
        view: "login", // DEV: Set this to login
        loggedIn: false
      });
    }
  }

  login() {
    // Retrieve saved places from database
    this.displaySavedPlaces();

    this.setState({
      view: "account",
      loggedIn: sessionStorage.getItem('loggedIn'),
      username: sessionStorage.getItem('username'),
      user_id: sessionStorage.getItem('user_id')
    });
  }

  logout() {
    this.setState({
      view: 'login',
      loggedIn: false
    })
    sessionStorage.setItem('loggedIn', false);
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('user_id', 0);
    sessionStorage.clear();
  }

  register() {
    this.setState({
      view: 'register'
    });
  }

  // Searchbar.jsx -> App.jsx
  // Place.jsx     -> App.jsx
  // App.jsx       -> Maps.jsx
  placeSearch(query) {
    if (query.length !== 0) {
      this.setState({
        placeSearch: query,
        mapFocus: [query[0].y, query[0].x],
        mapZoom: 10
      });
    }
    else {
      this.setState({
        placeSearch: '',
      });
    }
  }

  potentialPlace(place) {
    console.log(place);
    this.setState({
      insertPlace: place.label,
      insertLat: place.y,
      insertLon: place.x
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar view={this.state.view}
                   loggedIn={this.state.loggedIn}
                   username={this.state.username}
                   login={this.login} logout={this.logout}
                   register={this.register}
                   user_id={this.state.user_id}
                   insertPlace={this.state.insertPlace}
                   insertLat={this.state.insertLat}
                   insertLon={this.state.insertLon}
                   placeSearch={this.placeSearch}
                   default_place_query={DEFAULT_PLACE_QUERY}
                   displaySavedPlaces={this.displaySavedPlaces}/>
        </div>
        <Maps mapFocus={this.state.mapFocus}
              mapZoom={this.state.mapZoom}
              placeSearch={this.state.placeSearch}
              potentialPlace={this.potentialPlace}
              places={this.state.places}/>
      </div>
    );
  }
}

export default App;