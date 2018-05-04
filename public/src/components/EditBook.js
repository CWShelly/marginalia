
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { editBook, startRemoveBook } from '../actions/books';

 export class EditBook extends React.Component{
   onSubmit=(book)=>{
   this.props.editBook(this.props.book.id, book);
   this.props.history.push('/');
}
    onRemove = ()=>{

      this.props.startRemoveBook({ id: this.props.book.id })
      const notBooks = (book)=>{
        return book.id !== this.props.book.id
      }
      const filtered = this.props.books.filter(notBooks)

      const json = JSON.stringify(filtered)
      localStorage.setItem('books', json)

      this.props.history.push('/');
    }


  render(){
    return (
      <div>
       <BookForm
       book={this.props.book}
       books={this.props.books}
       onSubmit={
        this.onSubmit}
       />

       <button onClick={this.onRemove}>Delete Book</button>
      </div>
    )
  }
 }


 const mapStateToProps = (state, props)=>{

  return {
    book: state.books.find((book)=>book.id === props.match.params.id),
    books: state.books.filter((book)=> book.id !== book)

  }
}


const mapDispatchToProps = (dispatch, props) => ({
  editBook:(id, book)=> dispatch(editBook(id, book)),
  startRemoveBook: (data)=> dispatch(startRemoveBook(data))

})


 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
