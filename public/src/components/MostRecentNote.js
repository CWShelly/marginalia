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
    remainingCharacters: 210,
    display: false,
  }

  componentDidMount(){
    console.log(this.props);
    if(this.props.location){
      this.setState((prevState)=>({
        display: !prevState.display
      }))
    }
  }

  displayAddNote =()=>{

    this.setState((prevState)=>({
      display: !prevState.display
    }))

    console.log(this.state.display);
  }

  onNoteChange = (e) =>{
    e.persist()

    const note = e.target.value;

    this.setState((prevState)=>({

       remainingCharacters: 210 - parseInt(e.target.value.length),

       note,
      }));
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if (!this.state.note ){
      this.setState(()=>({errorNote: 'Please enter a note'}));
    } else{
      this.setState((prevState)=>({
       count: parseInt(prevState.count) + 1,
         display: !prevState.display,
        errorNote: '',

      }));
      this.props.onSubmit({
        chapter_number: this.props.last_note.chapter_number,
        page_number: this.props.last_note.page_number,
        paragraph_number:this.props.last_note.paragraph_number + 1,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),


      })
    }

    if(!this.state.errorNote){

        this.state.note = "",
        this.state.remainingCharacters = 210;

    }

  }

 render(){
 console.log(this.props);
   return(
<div>


       { this.props.book_notes.length > 0 && this.props.location &&
      <button onClick={this.displayAddNote}
         className="most-recent-note-button"> {!this.state.display ? 'Quick Add' : 'Cancel'}
      </button>
    }

    {  this.state.display &&

     <div className="most-recent-note">
       <p className="most-recent-note-text">
           Last note - Chapter: {this.props.last_note.chapter_number}.
           Page: {this.props.last_note.page_number}.
           Paragraph: {this.props.last_note.paragraph_number}.
         </p>

      <p className="most-recent-note-text">
          Continue from Chapter: {this.props.last_note.chapter_number}.
          Page: {this.props.last_note.page_number}.
          Paragraph: {this.props.last_note.paragraph_number +1}.
      </p>

        { this.state.errorNote && <p>{this.state.errorNote}</p> }

      <form onSubmit={this.onSubmit}>
         <p>
             <textarea
             className="most-recent-note-textarea"
             type="type"
             maxLength="210"

             placeholder="Enter your note here."
             value={this.state.note}
             onChange={this.onNoteChange}
             />
         </p>
         <button className="button-quick-form"> Add note</button>
      </form>
    <p>{this.state.remainingCharacters} characters left.</p>

  </div>
  }

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
