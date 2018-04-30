import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';
import BookForm from './BookForm';



export class AddBook extends React.Component{

 onSubmit=(book)=>{
   console.log(book);
     this.props.addBook(book);
     // this.props.history.push('/')
  }
  render(){
    return (
      <div>
       <h1>Add a book</h1>
       <BookForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     addBook: (book)=> dispatch(addBook(book))
})
export default connect(undefined, mapDispatchToProps)(AddBook)
