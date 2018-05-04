
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { editBook, removeBook } from '../actions/books';

 export class EditBook extends React.Component{
   onSubmit=(book)=>{
   this.props.editBook(this.props.book.id, book);
   this.props.history.push('/');
}
    onRemove = ()=>{
      console.log(this.props);
      this.props.removeBook({ id: this.props.book.id })
      const notBooks = (book)=>{
        return book.id !== this.props.book.id
      }
      const filtered = this.props.books.filter(notBooks)
      console.log(filtered);
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
  removeBook: (data)=> dispatch(removeBook(data))

})


 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
