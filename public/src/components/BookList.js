import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{


 render(){
   console.log(this.props);
   return(
     <div>
      <h1>Book List</h1>
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
