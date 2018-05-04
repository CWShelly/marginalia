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
   const chapter_number= e.target.value;
   this.setState(()=>({ chapter_number}));
  }
  onPageNumberChange = (e) =>{
    const page_number = e.target.value;
    this.setState(()=>({ page_number }));

  }
  onParagraphNumberChange = (e) =>{
    const paragraph_number = e.target.value;
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
        page_number: this.state.page_number,
        paragraph_number: this.state.paragraph_number,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),

      })
    }

  }

  render(){
    return(
      <div>
      {this.state.errorNote && <p>{this.state.errorNote}</p>}

      <p>{this.state.remainingCharacters} characters left.</p>

      <form onSubmit={this.onSubmit}>
      Chapter:
      <input
      type="number"
      placeholder="Chapter"
      autoFocus
      value={this.state.chapter_number}
      onChange={this.onChapterNumberChange}
      />
      Page:
      <input
      type="number"
      placeholder="Page"
      value={this.state.page_number}
      onChange={this.onPageNumberChange}
      />
      Paragraph:
      <input
      type="number"
      placeholder="Paragraph"
      value={this.state.paragraph_number}
      onChange={this.onParagraphNumberChange}
      />
      Note:
      <textarea
      type="text"
      placeholder="note"
      maxLength="210"
      value={this.state.note}
      onChange={this.onNoteChange}
      />
      <button>Add Note</button>
      </form>

      </div>
    )
  }

}
