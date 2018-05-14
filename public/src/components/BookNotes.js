import React from 'react';
import { connect } from 'react-redux';
import selectBookNotes from '../selectors/bookNotes';
import ParagraphList from './ParagraphList'


export class BookNotes extends React.Component{
  render(){

    return(
      <div> book notes</div>
    )
  }
}


const mapStateToProps = (state)=>{
  console.log(state);
  return{
    bookNotes: state.books,
 
  }
}

export default connect(mapStateToProps)(BookNotes);
