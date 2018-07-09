
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { startEditBook, startRemoveBook } from '../actions/books';
 import { startRemoveNote} from '../actions/notes'


 import filterThis from "../selectors/genericSelector";
 // TODO: fix removal of notes when book is deleted.



 export class EditBook extends React.Component{
   state={
     buttonText: 'Update'
   }


   onSubmit=(book)=>{
   this.props.startEditBook(this.props.book.id, book);
   this.props.history.push('/');
}


onRemove=() => {
  this.props.startRemoveBook({id: this.props.book.id})

  for(let i = 0; i< this.props.relatedNotes.length; i++){
    this.props.startRemoveNote({id:
    this.props.relatedNotes[i].id
    })
}
//
// for(let i = 0; i< this.props.filteredPages.length; i++){
//   this.props.startRemovePage({id:
//   this.props.filteredPages[i].id
//   })
//   }
//
//
//   for(let i = 0; i< this.props.filteredParagraphs.length; i++){
//     this.props.startRemoveParagraph({id:
//     this.props.filteredParagraphs[i].id
//     })
//     }
//
     this.props.history.push('/')
}

  // <button  onClick={this.onRemove}>Delete<i className="fa fa-trash-o"></i></button>

  render(){


    return (
      <div>
       <BookForm
       book={this.props.book}
       books={this.props.books}
       buttonText={this.state.buttonText}

       onSubmit={
        this.onSubmit}
       />




      </div>
    )
  }
 }


 const mapStateToProps = (state, props)=>{
console.log(state);
  return {
    book: state.books.find((book)=>book.id === props.match.params.id),
    books: state.books.filter((book)=> book.id !== book),
    // filteredChapters: filterThis(state.chapters, 'book_id'),
    // filteredPages:filterThis(state.pages, 'book_id'),
    // filteredParagraphs: filterThis(state.paragraphs, 'book_id'),
    relatedNotes: filterThis(state.notes, 'book_id')



  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditBook:(id, book)=> dispatch(startEditBook(id, book)),
    startRemoveBook: (data)=> dispatch(startRemoveBook(data)),
    startRemoveChapter: (data)=> dispatch(startRemoveChapter(data)),
    startRemovePage:(data)=> dispatch(startRemovePage(data)),
    startRemoveParagraph: (data)=>dispatch(startRemoveParagraph(data)),
    startRemoveNote: (data)=>dispatch(startRemoveNote(data))


  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
