import React from 'react';


class IdeaItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div><h9>{this.props.title}</h9></div>
    )
  }

}

export default IdeaItem;
