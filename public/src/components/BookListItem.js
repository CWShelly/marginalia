import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookListItem extends React.Component{


  onHandleClick=()=>{

    localStorage.setItem('book_id', this.props.id)
    localStorage.setItem('author_first', this.props.author_first_name);
    localStorage.setItem('author_last', this.props.author_last_name);
    localStorage.setItem('title', this.props.title)
  }
  render(){

    return(

      <div>
        <p>
        <Link
        to={`/viewNotes/${this.props.title}`} onClick={this.onHandleClick}
        >
        {this.props.title} by {this.props.author_first_name}       {this.props.author_last_name}
        </Link>


       </p>


    <Link to={`/edit/${this.props.id}`}>Edit</Link>
      </div>

    )
  }
}


export default BookListItem;
