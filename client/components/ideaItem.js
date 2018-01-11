import React from 'react';


class IdeaItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <button className="btn btn-outline-success">
          <div><img src={this.props.idea.main_image} /></div>
          <a>{this.props.idea.title}</a>
        </button>
      </div>
    )
  }

}

export default IdeaItem;
