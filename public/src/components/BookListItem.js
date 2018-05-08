import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookListItem extends React.Component{


  onHandleClick=()=>{

    localStorage.setItem('book_id', this.props.id)
    localStorage.setItem('author_first', this.props.author_first_name);
    localStorage.setItem('author_last', this.props.author_last_name);
  }
  render(){

console.log(this.props);
    return(
      <div>
        <p> <Link onClick={this.onHandleClick}
        to={`/chapter/${this.props.title}/${this.props.id}`}>

        {this.props.title}</Link>
          by {this.props.author_first_name} {this.props.author_last_name}
       </p>

      </div>

    )
  }
}


export default BookListItem;
