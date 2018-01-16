import React from 'react';

class ItineraryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comment: ''
    }
    this.handleComment = this.handleComment.bind(this);
    this.commentSubmit = this.commentSubmit.bind(this);
  }

  handleComment(e){
    this.setState({comment: e.target.value});
  }

  commentSubmit(e){

  }

  render(){
    return (
      <div>
        <div className="card" style={{"width": "400px"}}>
          <div><img className="card-img-top" src={this.props.idea.image}/></div>
          <div className="card-body">
          <a>{this.props.idea.title}</a>
          <form onSubmit={this.commentSubmit}>
            <input value={this.state.comment} onChange={this.handleComment} placeholder="Enter comments">
            </input>
            <button onClick={this.commentSubmit} className="btn-dark btn-outline-success">Submit</button>
          </form>
          </div>
        </div>
        <p></p>
      </div>
    )
  }
}



export default ItineraryItem;
