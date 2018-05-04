import React from 'react';
import moment from 'moment';
 import { connect } from 'react-redux';
import pickUpFromLastNote from '../selectors/from_last_note';


export  class MostRecentNote extends React.Component{
  state = {
    chapter_number: 0,
    page_number:0,
    paragraph_number:0,
    note: '',
    createdAt: moment(),
    errorNote: '',
    count: 1,
    remainingCharacters: 210
  }



  onNoteChange = (e) =>{
    e.persist()

    const note = e.target.value;
   
    this.setState((prevState)=>({
       count: parseInt(prevState.count) + 1,
       remainingCharacters: 210 - parseInt(e.target.value.length),
       note,
      }));


  }



  onSubmit = (e)=>{
    e.preventDefault();

    if (!this.state.note ){
      this.setState(()=>({errorNote: 'Please enter a note'}));
    } else{
      this.setState(()=>({errorNote: ''}));
      this.props.onSubmit({
        chapter_number: this.props.last_note.chapter_number,
        page_number: this.props.last_note.page_number,
        paragraph_number: this.props.last_note.chapter_number + this.state.count,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),

      })
    }

  }

 render(){

   return(
     <div>



<p> Quick Add -- </p>
   <p>
   Last note: {this.props.last_note.chapter_number},
   page: {this.props.last_note.page_number},
    paragraph {parseInt(this.props.last_note.paragraph_number)}. </p>

    <p>

  Continue from chapter: {this.props.last_note.chapter_number},
   page: {this.props.last_note.page_number},
    paragraph {parseInt(this.props.last_note.paragraph_number) + 1}.   </p>

     <form onSubmit={this.onSubmit}>
     <textarea
     type="type"
     maxLength="210"
     value={this.state.note}
     onChange={this.onNoteChange}
     />
     <button> Quick Add</button>
     </form>
<p>{this.state.remainingCharacters} characters left.</p>

     </div>
   )
 }
}



const mapStateToProps = (state)=>{

     return {

       last_note:pickUpFromLastNote(state.notes)
     }

}

export default connect(mapStateToProps)(MostRecentNote);
