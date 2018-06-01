import React from 'react';
import { connect } from 'react-redux';
import { startAddBook } from '../actions/books';
import BookForm from './BookForm';


export class AddBook extends React.Component{

 onSubmit=(book)=>{

     this.props.startAddBook(book);
     this.props.history.push('/')
  }

  render(){

    return (
      <div>
       <BookForm
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
