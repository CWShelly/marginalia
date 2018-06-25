import React from 'react';
import moment from 'moment';

export default class ChapterSummaryForm extends React.Component{

  constructor(props){


    super(props);
    this.state = {
      chapter_number: props.summary ? props.summary.chapter_number : '',
      summary: props.summary ? props.summary.summary :  '',
      title: localStorage.getItem('title'),
      createdAt: moment(),
      book_id: localStorage.getItem('book_id'),
      errorNote: '',
    }

  }



onSubmit=(e)=>{

    e.preventDefault()

      if (!this.state.chapter_number ||  !this.state.summary){
        this.setState(()=>({errorNote: 'Please enter stuff'}));
      }

       else{
        this.setState(()=>({errorNote: ''}));
        this.props.onSubmit({
          chapter_number: this.state.chapter_number,
          summary: this.state.summary,
          createdAt: this.state.createdAt.valueOf(),
          title: this.state.title,
          book_id:this.state.book_id,
        })
      }

      if(!this.state.errorNote){
        this.state.summary =''
      }

  }

  onChapterNumberChange = (e) =>{

   const chapter_number= parseInt( e.target.value);
   this.setState(()=>({ chapter_number}));
  }



  onSummaryChange = (e) =>{

    const summary = e.target.value;
    this.setState((prevState)=>({
       summary,
      }));

  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  render(){

    return(
      <div>
    {this.state.errorNote && <p  >{this.state.errorNote}</p>}



<form  onSubmit={this.onSubmit}>
  <p>Add a Chapter Summary</p>
  <textarea

  type="text"
  placeholder="Enter your note here."

  value={this.state.summary}
  onChange={this.onSummaryChange}
  />

  <p>Chapter Number:
  <input
  type="number"
  placeholder="Chapter"
  value={this.state.chapter_number}
  onChange={this.onChapterNumberChange}
  /></p>


  <button disabled={!this.state.chapter_number ||

     !this.state.summary }  >Add Chapter Summary</button>
  </form>

      </div>
    )



}
}
