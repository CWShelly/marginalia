import React from 'react';
import moment from 'moment';

export default class NoteForm extends React.Component{
  state = {
    chapter_number: 0,
    page_number:0,
    paragraph_number:0,
    note: '',
    createdAt: moment(),
    errorNote: '',
    remainingCharacters: 210
  }

  onChapterNumberChange = (e) =>{
   const chapter_number= parseInt( e.target.value);
   this.setState(()=>({ chapter_number}));
  }
  onPageNumberChange = (e) =>{
    const page_number = parseInt( e.target.value);
    this.setState(()=>({ page_number }));

  }
  onParagraphNumberChange = (e) =>{
    const paragraph_number = parseInt( e.target.value);
    this.setState(()=>({ paragraph_number }));

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
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if (!this.state.chapter_number || !this.state.page_number || !this.state.paragraph_number ){
      this.setState(()=>({errorNote: 'Please enter stuff'}));
    } else{
      this.setState(()=>({errorNote: ''}));
      this.props.onSubmit({
        chapter_number: this.state.chapter_number,
        page_number: this.state.chapter_number,
        paragraph_number: this.state.paragraph_number,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),

      })
    }

    if(!this.state.errorNote){
      this.state.chapter_number = 0;
      this.state.page_number = 0;
      this.state.paragraph_number =0;
      this.state.note =''
      this.state.remainingCharacters = 210;
    }


  }

  render(){
    return(
      <div>
      {this.state.errorNote && <p className="note-error">{this.state.errorNote}</p>}



      <form className="note-form" onSubmit={this.onSubmit}>
      <p>Add a note: {this.state.remainingCharacters} characters left.</p>
      <textarea  
      className="note-form-textarea"
      type="text"
      placeholder="Enter your note here."
      maxLength="210"
      value={this.state.note}
      onChange={this.onNoteChange}
      />

      Chapter:
      <input className="note-form-input"
      type="number"
      placeholder="Chapter"

      value={this.state.chapter_number}
      onChange={this.onChapterNumberChange}
      />
      Page:
      <input
      className="note-form-input"
      type="number"
      placeholder="Page"
      value={this.state.page_number}
      onChange={this.onPageNumberChange}
      />
      Paragraph:
      <input
      className="note-form-input"
      type="number"
      placeholder="Paragraph"
      value={this.state.paragraph_number}
      onChange={this.onParagraphNumberChange}
      />


      <button disabled={!this.state.chapter_number || !this.state.page_number || !this.state.paragraph_number || !this.state.note } className="note-form-button">Add Note</button>
      </form>

      </div>
    )
  }

}
