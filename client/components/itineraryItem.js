import React from 'react';

class ItineraryItem extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container">
        <div><img src={this.props.idea.image}/></div>
        <a>{this.props.idea.title}</a>
      </div>
    )
  }
}



export default ItineraryItem;
