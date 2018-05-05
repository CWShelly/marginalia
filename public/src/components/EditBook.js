
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { editBook, startRemoveBook } from '../actions/books';
 import removeNotesAssociatedWithBook from '../selectors/removeNotesAssociatedWithBook';
import { startRemoveNote, startRemoveNoteByBook } from '../actions/notes';



 export class EditBook extends React.Component{
   onSubmit=(book)=>{
   this.props.editBook(this.props.book.id, book);
   this.props.history.push('/');
}


    onTest = ()=>{


    this.props.removeAssociatedNotes.forEach((a)=>{


      this.props.removeAssociated({ id: a})
    })

    this.props.startRemoveBook({id: this.props.book.id})

    const notBooks = (book)=>{
      return book.id !== this.props.book.id
    }

    this.props.history.push('/');
    }


  render(){


    return (
      <div>
       <BookForm
       book={this.props.book}
       books={this.props.books}
       removeAssociatedNotes={this.props.removeAssociatedNotes}
       onSubmit={
        this.onSubmit}
       />

       <button onClick={this.onTest}>Delete Book</button>


      </div>
    )
  }
 }


 const mapStateToProps = (state, props)=>{

  return {
    book: state.books.find((book)=>book.id === props.match.params.id),
    books: state.books.filter((book)=> book.id !== book),
    removeAssociatedNotes: removeNotesAssociatedWithBook(state.notes)

  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    editBook:(id, book)=> dispatch(editBook(id, book)),
    startRemoveBook: (data)=> dispatch(startRemoveBook(data)),
    removeAssociated: (data)=> dispatch(startRemoveNote(data))

  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
