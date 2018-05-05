import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{


 render(){

   return(
     <div>
      <h1>Your Books</h1>
      {this.props.books.map((book)=>{
        return <BookListItem key={book.id} { ...book} />
      })}

      </div>

   )
 }

}


const mapStateToProps = (state)=>{
console.log(state.books);

      return {
        books:selectBooks(state.books)

      }


}



export default connect(mapStateToProps)(BookList);
