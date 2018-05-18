import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TagListItem extends React.Component{



  render(){

    return(
      <div className="number-list-item-container">
      <li className="pages">
        Tag {this.props.tag}
      </li>
      </div>


    )
  }
}


export default TagListItem;
