import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class NoteListItem extends React.Component{
render(){
 
  return(
    <div>
    <p> {this.props.note}</p>
    <p>chapter:{this.props.chapter_number} page:{this.props.page_number} paragraph:{this.props.paragraph_number}</p>
      <p>
       <Link to={`/editNote/${this.props.id}`}>Edit</Link></p>
    </div>
  )
}
}






export default NoteListItem;
