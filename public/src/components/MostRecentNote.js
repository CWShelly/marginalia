import React from 'react';
import moment from 'moment';
 import { connect } from 'react-redux';
import pickUpFromLastNote from '../selectors/from_last_note';
import selectNotes from '../selectors/notes';


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
        paragraph_number: parseInt(this.props.last_note.chapter_number) + parseInt( this.state.count),
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),

      })
    }

    if(!this.state.errorNote){

        this.state.note = ""
    }

  }

 render(){

   return(
     <div>
<div className="most-recent-note">

     {
       this.props.book_notes.length > 0 && <div> <p className="most-recent-note-title"> Quick Add </p>
   <p className="most-recent-note-text">
   Last note - Chapter: {this.props.last_note.chapter_number}.
   Page: {this.props.last_note.page_number}.
   Paragraph: {parseInt(this.props.last_note.paragraph_number)}. </p>
     <p className="most-recent-note-text">
      Continue from Chapter: {this.props.last_note.chapter_number}.
      Page: {this.props.last_note.page_number}.
      Paragraph: 2.

    </p>

        {this.state.errorNote && <p>{this.state.errorNote}</p>}

         <form onSubmit={this.onSubmit}>
         <p><textarea
         className="most-recent-note-textarea"
         type="type"
         maxLength="210"

         value={this.state.note}
         onChange={this.onNoteChange}
         /></p>
         <button className="button-quick-form"> Quick Add</button>
         </form>
    <p>{this.state.remainingCharacters} characters left.</p>

     </div>
}
</div>
     </div>

   )
 }
}

const mapStateToProps = (state)=>{

     return {
       last_note:pickUpFromLastNote(state.notes),
       state_notes: state.notes,
       book_notes: selectNotes(state.notes)

     }

}

export default connect(mapStateToProps)(MostRecentNote);
