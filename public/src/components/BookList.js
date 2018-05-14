import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{


 render(){

   return(
     <div className="book-container" >
      <h1 >Your Books</h1>
      {this.props.books.length === 0 && <p>Add a book to get started</p>}
      {this.props.books.map((book)=>{
        return <BookListItem key={book.id} { ...book} />
      })}

      </div>

   )
 }

}


const mapStateToProps = (state)=>{


      return {
        books:selectBooks(state.books)

      }


}



export default connect(mapStateToProps)(BookList);
