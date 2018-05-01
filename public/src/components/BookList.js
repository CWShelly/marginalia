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


    if(books){

        return {
          books: books.concat(state.books)
        }
    }

    else{

      return {
        books:state.books

      }
    }

}



export default connect(mapStateToProps)(BookList);
