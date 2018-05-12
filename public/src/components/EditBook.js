
 import React from 'react';
 import { connect } from 'react-redux';
 import BookForm from './BookForm';
 import { startEditBook, startRemoveBook } from '../actions/books';
 import { startRemovePage } from '../actions/pages'
 import { startRemoveParagraph } from '../actions/paragraphs';
 import { startRemoveChapter } from '../actions/chapters'

 import filterThis from "../selectors/genericSelector";
 import filterSubLevel from "../selectors/genericIdFinder";



 export class EditBook extends React.Component{
   onSubmit=(book)=>{
   this.props.startEditBook(this.props.book.id, book);
   this.props.history.push('/');
}


onRemove=() => {
  this.props.startRemoveBook({id: this.props.book.id})

  for(let i = 0; i< this.props.filteredChapters.length; i++){
    this.props.startRemoveChapter({id:
    this.props.filteredChapters[i].id
    })
}

for(let i = 0; i< this.props.filteredPages.length; i++){
  this.props.startRemovePage({id:
  this.props.filteredPages[i].id
  })
  }


  for(let i = 0; i< this.props.filteredParagraphs.length; i++){
    this.props.startRemoveParagraph({id:
    this.props.filteredParagraphs[i].id
    })
    }

     this.props.history.push('/')
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
    books: state.books.filter((book)=> book.id !== book),
    filteredChapters: filterThis(state.chapters, 'book_id'),
    filteredPages:filterThis(state.pages, 'book_id'),
    filteredParagraphs: filterThis(state.paragraphs, 'book_id'),



  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditBook:(id, book)=> dispatch(startEditBook(id, book)),
    startRemoveBook: (data)=> dispatch(startRemoveBook(data)),
    startRemoveChapter: (data)=> dispatch(startRemoveChapter(data)),
    startRemovePage:(data)=> dispatch(startRemovePage(data)),
    startRemoveParagraph: (data)=>dispatch(startRemoveParagraph(data))


  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
