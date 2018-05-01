import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{

  componentDidUpdate(nextProps){

    const json = JSON.stringify(this.props.books)
    localStorage.setItem('books', json)
 }

 render(){
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

  const json = localStorage.getItem('books')
  const books = JSON.parse(json);


    if(books && state.books.length ===0){

        return {
          books: books.concat(state.books)
        }
    }
    else if(books && state.books.length >0){


   if(books[books.length-1].id ===
state.books[state.books.length-1].id){
  return {
    books: books
  }
}
  else{

       return {
         books: books.concat([state.books[state.books.length-1]])
       }
     }
}
    else{

      return {
        books:state.books

      }
    }

}



export default connect(mapStateToProps)(BookList);
