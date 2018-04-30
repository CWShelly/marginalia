
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { editBook, removeBook } from '../actions/books';



 export class EditBook extends React.Component{
   onSubmit=(book)=>{
     console.log(book);
     console.log(this.props);
       this.props.editBook(this.props.book.id, book);
       this.props.history.push('/');
}
    onRemove=()=>{
      console.log(this.props);
      // this.props.removeBook({ id: this.props.book.id });
      // this.props.history.push('/');
    }

  render(){
    return (
      <div>
       <BookForm
       book={this.props.book}
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
    book: state.books.find((book)=>book.id === props.match.params.id)
  }
}


const mapDispatchToProps = (dispatch, props) => ({
  editBook:(id, book)=> dispatch(editBook(id, book)),
  removeBook: (data)=> dispatch(removeBook(data))
})


 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
