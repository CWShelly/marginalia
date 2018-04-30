import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';



export class BookList extends React.Component{

  componentDidUpdate(nextProps){

    console.log('updated booklist');
    const json = JSON.stringify(this.props.books)
    localStorage.setItem('books', json)

 }

 componentDidMount(){
   console.log('mountd');

   // console.log('updated booklist');
   // const json = JSON.stringify(this.props.books)
   // localStorage.setItem('books', json)
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
  console.log('mapping');
  console.log(state);
  const json = localStorage.getItem('books')
  const books = JSON.parse(json);
  console.log(books);

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
