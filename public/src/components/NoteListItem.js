import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NoteListItem extends React.Component{
render(){

  return(
    <div>
    <div className="note-item-container">

    <p className="note-item-reference">chapter:{this.props.chapter_number} page:{this.props.page_number}  paragraph: {this.props.paragraph_number} </p>
      <p className="note-item-note">    {this.props.note}</p>
      <p className="note-item-note-edit">
       <Link className="note-item-note-edit" to={`/editNote/${this.props.id}`}>Edit</Link></p>
    </div>
    </div>
  )
}
}






export default NoteListItem;
