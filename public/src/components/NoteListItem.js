import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NoteListItem extends React.Component{
render(){
console.log(this.props);
  return(
    <div>
    <div className="note-item-container">
    <li>
    <p className="number-list-item" >    {this.props.note}</p>
    <p className="list-paragraph-item-reference-paragraph">chapter:{this.props.chapter_number} page:{this.props.page_number}  paragraph: {this.props.paragraph_number} </p>

    </li>

    </div>
    </div>
  )
}
}






export default NoteListItem;
