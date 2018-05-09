import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){
 
    return(
      <li>
      <p>{this.props.note}</p>
        <p>Paragraph: {this.props.paragraph_number} </p>
      </li>

    )
  }
}


export default ParagraphListItem;
