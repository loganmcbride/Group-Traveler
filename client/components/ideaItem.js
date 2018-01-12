import React from 'react';
import axios from 'axios';


class IdeaItem extends React.Component {
  constructor(props){
    super(props)
    this.postVotes = this.postVotes.bind(this);
  }

  postVotes(){
    console.log('WANG: ', this.props.idea.title)
    axios.post('/votes', {
      title: this.props.idea.title,
      image: this.props.idea.main_image,
      name: this.props.name
    })
    .then((response) => {
      console.log('successful db save!')
    })
  }

  render(){
    return(
      <p>
        <button className="btn btn-outline-success" onClick={this.postVotes.bind(this)}>
          <div><img src={this.props.idea.main_image} /></div>
          <a>{this.props.idea.title}</a>
        </button>
      </p>
    )
  }

}

export default IdeaItem;
