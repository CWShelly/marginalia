import React from 'react';
import { connect } from 'react-redux';
import { startAddBook } from '../actions/books';
import BookForm from './BookForm';


export class AddBook extends React.Component{

state={
  buttonText: "Add Book"
}
 onSubmit=(book)=>{
     this.props.startAddBook(book);
     this.props.history.push('/')
  }

  render(){

    return (
      <div>
         <BookForm
           buttonText={this.state.buttonText}
           onSubmit={this.onSubmit}
         />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddBook: (book)=> dispatch(startAddBook(book))
})
export default connect(undefined, mapDispatchToProps)(AddBook)
