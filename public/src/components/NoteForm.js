import React from 'react';
import moment from 'moment';

export default class NoteForm extends React.Component{
  state = {
    chapter_number: 0,
    page_number:0,
    paragraph_number:0,
    note: '',
    createdAt: moment(),
    error: ''
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
    const note = e.target.value;
    this.setState(()=>({ note }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if (!this.state.chapter_number || !this.state.page_number || !this.state.paragraph_number ){
      this.setState(()=>({error: 'Please enter the page number, chapter number, and paragraph number'}));
    } else{
      this.setState(()=>(error: ''));
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
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.onSubmit}>
      <input
      type="number"
      placeholder="Chapter"
      autoFocus
      value={this.state.chapter_number}
      onChange={this.onChapterNumberChange}
      />
      <input
      type="number"
      placeholder="Page"
      value={this.state.page_number}
      onChange={this.onPageNumberChange}
      />
      <input
      type="number"
      placeholder="Paragraph"
      value={this.state.paragraph_number}
      onChange={this.onParagraphNumberChange}
      />
      <textarea
      type="text"
      placeholder="note"
      value={this.state.note}
      onChange={this.onNoteChange}
      />
      <button>Add Book</button>
      </form>

      </div>
    )
  }

}
