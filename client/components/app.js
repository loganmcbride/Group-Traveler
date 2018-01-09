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
    this.state = {
      items: []
    }
  }

  render(){
    return(
      <Router>
        <div>
          <h2>Group Travel Ideas</h2>
          <div>
            <nav>
              <div>
                <ul>
                  <li>
                    <div><Link to='/'>Ideas</Link></div>
                  </li>
                  <li>
                    <div><Link to='/itinerary'>Itinerary</Link></div>
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
