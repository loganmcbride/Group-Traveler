import React from 'react';
import axios from 'axios';
import IdeaItem from './ideaItem';

class Ideas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: '',
      ideas: [],
      name: '',
      flag: false
    }
    this.getIdeas = this.getIdeas.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.nameSubmit = this.nameSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  getIdeas(){
    axios.post('/ideas', this.state)
    .then((response) => {
      this.setState({ideas: response.data.points_of_interest})
    });
  }

  handleSubmit(e){
    this.getIdeas();
    e.preventDefault();
  }

  handleChange(e){
    this.setState({city: e.target.value})
  }

  handleName(e){
    this.setState({name: e.target.value})
  }

  nameSubmit(e){
    this.setState({flag: true})
    e.preventDefault();
  }

  render(){
    if (this.state.flag === false){
      return(
        <div className="container">
          <h5>Create a New Trip!</h5>
          <form onSubmit={this.nameSubmit}>
            <input value={this.state.name} onChange={this.handleName} placeholder="Enter a trip name">
            </input>
            <button onClick={this.nameSubmit} className="btn-dark btn-outline-success">Create</button>
          </form>
        </div>
      )
    } else {
      return(
        <div className="container">
          <h7>{this.state.name}</h7>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.city} onChange={this.handleChange} placeholder="Enter a city">
            </input>
            <button onClick={this.handleSubmit} className="btn-dark btn-outline-success">Search</button>
          </form>
          <p></p>
          <div>
          {this.state.ideas.map((idea, i) => <IdeaItem idea={idea} key={i} name={this.state.name}/> )}
          </div>
        </div>
      )
    }
  }
}

export default Ideas;
