import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const BookListItem = (
  { id,
    author_last_name,
    author_first_name,
    title,
    createdAt
  }) =>(
    <div>
      <p> <Link to={`/addNote/${id}`}>{title}</Link> by {author_first_name} {author_last_name}. <Link to={`/edit/${id}`}>Edit</Link></p>
    </div>
  )


// export default connect()(BookListItem)
export default BookListItem;
