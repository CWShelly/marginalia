import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';

const BookList = (props)=>(
  <div>
   <h1>Book List</h1>
   {props.books.map((book)=>{
     return <BookListItem key={book.id} { ...book} />
   })}
   </div>
)

const mapStateToProps = (state)=>{
  return {
    books: selectBooks(state.books)
  }
}


export default connect(mapStateToProps)(BookList);
