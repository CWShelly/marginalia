import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){

console.log(this.props);
    return(
      <div>
        <p>


        {this.props.paragraph_number}/ {this.props.note}</p>

      </div>

    )
  }
}


export default ParagraphListItem;
