import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

 class NoteListItem extends React.Component{
render(){
console.log(this.props.tags);
console.log(Array.isArray(this.props.tags));
console.log(Object.keys(this.props.tags));


  return(

    <div>
    <p className="number-list-item-no-hover" >    {this.props.note}</p>
    <div className="list-paragraph-item-reference-paragraph">
    {this.props.title} chapter:{this.props.chapter_number}
     page:{this.props.page_number}  paragraph: {this.props.paragraph_number}
   <ul>
{Object.keys(this.props.tags).map((item)=>{
  return  <button className="display-tag-button" key={uuidv4()}>{item}</button>
})}
   </ul>
   </div>
    </div>


  )
}
}



export default NoteListItem;
