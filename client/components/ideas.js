import React from 'react';
import axios from 'axios';
import IdeaItem from './ideaItem';

class Ideas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: 'Seattle',
      resultsNum: '3',
      ideas: []
    }
    this.getIdeas = this.getIdeas.bind(this);
  }

  getIdeas(){
    axios.post('/ideas', this.state)
    .then((response) => {
      console.log('success!!', response);
      this.setState({ideas: response.data.points_of_interest})
    });
  }

  componentDidMount(){
    this.getIdeas();
  }

  render(){
    return(
      <div>
        <h7>Ideas Page</h7>
        {this.state.ideas.map((idea, i) => <IdeaItem idea={idea} key={i} />
        )}
      </div>
    )
  }
}

export default Ideas;
