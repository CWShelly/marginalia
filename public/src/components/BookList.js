import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';
import { startSetBooks } from '../actions/books';
import viewingOtherBooks from '../selectors/viewingOtherBooks';



export class BookList extends React.Component{
 componentDidMount(){
   console.log('booklist mount');
this.props.startSetBooks()
 }


 render(){
console.log("bookList");
console.log(this.props);
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
console.log(state.books);

if(localStorage.getItem('auth_id') === localStorage.getItem('browse_id')){
console.log("viewing your library");
  return {
    books:selectBooks(state.books)
  }
}

else{
  console.log("viewing other library");
  return {
    books:viewingOtherBooks(state.books)
  }
}

}

const mapDispatchToProps = (dispatch, props)=>{
  return{
    startSetBooks: ()=>{dispatch(startSetBooks())}
    // startSetBooks: startSetBooks()

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
