import React from 'react';
import axios from 'axios';

class Itinerary extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ideas: [],
      name: ''
    }
    this.getIdeas = this.getIdeas.bind(this);
    this.nameSubmit = this.nameSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  getIdeas(name){
    axios.get('/ideas', {name: name})
    .then((response) => {
      console.log('this is /ideas response :', response);
      this.setState({ideas: response})
    })
  }

  nameSubmit(e){
    getIdeas(this.state.name);
    e.preventDefault();
  }

  handleName(e){
    this.setState({name: e.target.value});
  }

  render(){
    return(
      <div className="container">
        <h5>Lets see your Trip</h5>
        <form onSubmit={this.nameSubmit}>
          <input value={this.state.name} onChange={this.handleName} placeholder="Enter the trip name">
          </input>
          <button onClick={this.nameSubmit} className="btn-dark btn-outline-success">Create</button>
        </form>
      </div>
    )
  }
}

export default Itinerary;
