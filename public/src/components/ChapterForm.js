import React from 'react';
import moment from 'moment';

export default class ChapterFrom extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.chapter_number ? moment(props.chapter.createdAt): moment(),
      chapter_number: props.chapter_number ? props.book.chapter_number : '',
      error: ''
    }
  }

  onChange=(e)=>{
    const chapter_number = parseInt( e.target.value);
    this.setState(()=>({ chapter_number }));
  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }


  onSubmit = (e)=>{
    e.preventDefault();
    if(!this.state.chapter_number )
    {
      this.setState(()=>{error:'Please enter a number'})
    } else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        chapter_number: this.state.chapter_number
      })

      if(!this.state.error){
       this.state.chapter_number = 0;
      }
    }


  }

  render(){
    return(
      <div>

          {this.state.error && <p  >{this.state.error}</p>}
        <form
        onSubmit={this.onSubmit}>
        <label>Add chapter number:</label>
        <input   className="paragraph-input" type="number"
        onChange={this.onChange}
        value={this.state.chapter_number}
        />
       <button><i className="fa fa-check"></i></button>
        </form>

      </div>

    )
  }
}
