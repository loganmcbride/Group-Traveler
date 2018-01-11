import React from 'react';
import Ideas from './ideas.js';
import Itinerary from './itinerary.js';
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <Router>
        <div>
          <div>
            <nav className="navbar collapse navbar-collapse navbar-light bg-light">
              <div>
                <h7 className="navbar-brand">Group Travel Ideas</h7>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <div className="nav-link"><Link to='/'>Ideas</Link></div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link"><Link to='/itinerary'>Itinerary</Link></div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Route exact path="/" component={Ideas}/>
          <Route path="/itinerary" component={Itinerary}/>
        </div>
      </Router>
    )
  }
}

export default App;
