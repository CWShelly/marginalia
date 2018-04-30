import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{

  componentDidUpdate(prevProps){
    console.log('updated booklist');
    const json = JSON.stringify(this.props.books)
    localStorage.setItem('books', json)

 }



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
  console.log(state);
  const json = localStorage.getItem('books')
  const books = JSON.parse(json);
  console.log(books);

    if(books){
         console.log('boooks are here');
        return {
          books: books
        }
    }
  else{
    console.log('books are not here');
    return {
      books:state.books

    }
  }

}



export default connect(mapStateToProps)(BookList);
