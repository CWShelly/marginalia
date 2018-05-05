import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookListItem extends React.Component{


  onHandleClick=()=>{

    localStorage.setItem('book_id', this.props.id)
  }
  render(){


    return(
      <div>
        <p> <Link onClick={this.onHandleClick}
        to={`/viewNotes/${this.props.title}/${this.props.id}`}>
        {this.props.title}</Link>
          by {this.props.author_first_name} {this.props.author_last_name}.
         <Link onClick={this.onHandleClick} to={`/edit/${this.props.id}`}>Edit</Link></p>
      </div>

    )
  }
}


export default BookListItem;
