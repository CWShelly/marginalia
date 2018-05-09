import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){

console.log(this.props);
    return(
      <div>
      <p>{this.props.note}</p>
        <p>Paragraph: {this.props.paragraph_number} </p>

      </div>

    )
  }
}


export default ParagraphListItem;
