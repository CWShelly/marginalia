import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
class BookListItem extends React.Component{


  onHandleClick=()=>{

    localStorage.setItem('book_id', this.props.id)
    localStorage.setItem('author_first', this.props.author_first_name);
    localStorage.setItem('author_last', this.props.author_last_name);
    localStorage.setItem('title', this.props.title)
  }
  render(){
console.log(this.props);
    return(

      <div>
        <div className="book-list-item-subcontainer">

        <Link className="edit"
        to={`/viewNotes/${this.props.title}`} onClick={this.onHandleClick}
        >
        {this.props.title} by {this.props.author_first_name} {this.props.author_last_name}
        </Link>

         {localStorage.getItem('auth_id') === localStorage.getItem('browse_id') && <Link className="edit" to={`/edit/${this.props.id}`}>
           <span className="book-item-edit">Edit{' '}</span><i className="fa fa-wrench"></i>
         </Link>}

       </div>
      <Link className="summary-link" to={`/viewSummaries/${this.props.title}`}
     onClick={this.onHandleClick}>Chapter Summaries</Link>

     <div>
     {this.props.bookTags &&
     <ul> tags: {' '}
       {Object.keys(this.props.bookTags).map((item)=>{
        return  <a className="tag"
        key={uuidv4()}>{item + '  '}</a>
      })}
     </ul>
           }
     </div>

      </div>

    )
  }
}


export default BookListItem;
