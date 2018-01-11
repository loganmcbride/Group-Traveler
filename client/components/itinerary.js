import React from 'react';

class Itinerary extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="container">
        <h5>{this.props.name}</h5>
      </div>
    )
  }
}

export default Itinerary;
