import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

 class NoteListItem extends React.Component{
render(){

  return(

    <div className="note mb-2 mt-2">
    <p> {this.props.note}</p>

        <div  >
        {this.props.title + ''} chapter:{this.props.chapter_number + ' '}
           page:{this.props.page_number}   paragraph:{this.props.paragraph_number}
         <ul> tags: {' '}
           {Object.keys(this.props.tags).map((item)=>{
            return  <a
            key={uuidv4()}>{item + '  '}</a>
          })}
         </ul>

           {localStorage.getItem('auth_id') === localStorage.getItem('browse_id') &&  <Link  to={`/editNote/${this.props.id}`}>Edit</Link>}
       </div>

    </div>


  )
}
}



export default NoteListItem;
