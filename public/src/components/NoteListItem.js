import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NoteListItem extends React.Component{
render(){

  return(
    <div>
  <p className="note-item-note">   {this.props.index+1}. {this.props.note}</p>
    <p className="note-item-reference">chapter:{this.props.chapter_number} page:{this.props.page_number}  </p>
      <p className="note-item-note-edit">
       <Link className="note-item-note-edit" to={`/editNote/${this.props.id}`}>Edit</Link></p>
    </div>
  )
}
}






export default NoteListItem;
