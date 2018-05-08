import React from 'react';
import moment from 'moment';

export default class ParagraphForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.paragraph_number ? moment(props.page.createdAt): moment(),
      paragraph_number: props.paragraph_number ? props.paragraph.paragraph_number : '',
      note: props.note ? props.paragraph.note : '',
      error: ''


    }
  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onChange = (e) =>{
    const paragraph_number = parseInt( e.target.value);
    this.setState(()=>({ paragraph_number }));
  }

  onNoteChange = (e) =>{
    e.persist()
    const note = e.target.value;
    this.setState((prevState)=>({
       remainingCharacters: 140 - parseInt(e.target.value.length),
       note,
      }));

  }

  onSubmit = (e)=>{
    e.preventDefault();
    if(!this.state.paragraph_number)
    {
      this.setState(()=>{error:'Please enter a number'})
    } else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        paragraph_number: this.state.paragraph_number,
        note: this.state.note
      })
      if(!this.state.error){
       this.state.page_number = 0;
      this.state.count = 140;
      this.state.note=''
      }
    }


  }

  render(){
    return(
      <div>
      <h1>Add Paragraph</h1>
          {this.state.error && <p  className="note-error">{this.state.error}</p>}
          <p>add a paragraph number and note</p>
        <form
        onSubmit={this.onSubmit}>

        <input type="number"
        onChange={this.onChange}
        />

        <textarea
        className="note-form-textarea"
        type="text"
        placeholder="Enter your note here."
        maxLength="140"

        onChange={this.onNoteChange}
        />
<button>submit</button>
        </form>

      </div>

    )
  }
}