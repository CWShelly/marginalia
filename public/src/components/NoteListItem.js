import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

 class NoteListItem extends React.Component{
render(){

  return(

    <div>
    <p className="note" >    {this.props.note}</p>

        <div className="reference">
        {this.props.title + ''} chapter:{this.props.chapter_number + ' '}
           page:{this.props.page_number}   paragraph:{this.props.paragraph_number}
         <ul> tags: {' '}
           {Object.keys(this.props.tags).map((item)=>{
            return  <a className="tag"
            key={uuidv4()}>{item + '  '}</a>
          })}
         </ul>

          <Link className="edit" to={`/editNote/${this.props.id}`}>Edit</Link>
       </div>

    </div>


  )
}
}



export default NoteListItem;
