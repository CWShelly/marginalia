import React from 'react';
import moment from 'moment';



export  default class ParagraphForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.paragraph ? moment(props.paragraph.createdAt): moment(),
      paragraph_number: props.paragraph ? props.paragraph.paragraph_number : '',
      note: props.paragraph ? props.paragraph.note : '',
      remainingCharacters: 140,
      error: '',

    }
  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onChange = (e) =>{

    // if(e.target.value > 0){
      const paragraph_number = parseInt( e.target.value);
      this.setState(()=>({ paragraph_number }));
    // }
    // else{
    //   this.setState(()=>({error: ''}))
    // }


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
    if(!this.state.paragraph_number || !this.state.note)
    {
      this.setState(()=>({error:'Please enter a paragraph number and a note.'}))

    }

    else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        paragraph_number: this.state.paragraph_number,
        note: this.state.note,
        
      })
      if(!this.state.error){
       this.state.page_number = 0;
      this.state.count = 140;
      this.state.note='',
      this.state.remainingCharacters = 140;

      }
    }


  }

  render(){

    return(
      <div className="container-form">


        {this.state.error && <p className="form-error">{this.state.error}</p>}

        <form
        history={this.props.history}
        onSubmit={this.onSubmit}>


        <label>Paragraph Number:</label>

        <input className="paragraph-input"
         type="number"
         onChange={this.onChange}
         value={this.state.paragraph_number}
        />


        <p>Note: {this.state.remainingCharacters} characters left.</p>
        <p className="form-textArea-p">
        <textarea
        value={this.state.note}
        className="form-textArea"
        type="text"
        placeholder="Enter your note here."
        maxLength="140"
         value={this.state.note}
        onChange={this.onNoteChange}
        />
        </p>

        <button className="form-button">Add note</button>
        </form>
        </div>

    )
  }
}
