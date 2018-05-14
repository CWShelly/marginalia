
import React from 'react';
import moment from 'moment';

export default class ChapterFrom extends React.Component{
  constructor(props){

    super(props);

    this.state={
      createdAt: props.chapter ? moment(props.chapter.createdAt): moment(),
      chapter_number: props.chapter ? props.chapter.chapter_number : '',
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
      this.setState(()=>({error:'Please enter a number'}))
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
console.log(this.state.chapter_number);

    return(
      <div>

      {this.state.error && <p className="form-error" >{this.state.error}</p>}

        <form
        onSubmit={this.onSubmit}>
        <label>Add chapter number:</label>
        <input   className="paragraph-input" type="number"


        onChange={this.onChange}
        value={this.state.chapter_number}

        />
       <button className="form-button-check"  ><i className="fa fa-plus"></i></button>
        </form>

      </div>

    )
  }
}
