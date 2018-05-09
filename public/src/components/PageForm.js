import React from 'react';
import moment from 'moment';

export default class  PageForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.page_number ? moment(props.page.createdAt): moment(),
      page_number: props.page_number ? props.page.page_number : '',
      error: ''
    }
  }

  onChange=(e)=>{
    const page_number = parseInt( e.target.value);
    this.setState(()=>({ page_number }));
  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onChange = (e) =>{
    const page_number = parseInt( e.target.value);
    this.setState(()=>({ page_number }));

  }
  onSubmit = (e)=>{
    e.preventDefault();
    if(!this.state.page_number )
    {
      this.setState(()=>{error:'Please enter a number'})
    } else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        page_number: this.state.page_number
      })
      if(!this.state.error){
      this.state.page_number = 0;

      }
    }

  }

  render(){
    return(
      <div>

          {this.state.error && <p  className="note-error">{this.state.error}</p>}
        <form
        onSubmit={this.onSubmit}>

        <input type="number"
        onChange={this.onChange}
        />
    <button className="button-form">Add Page</button>
        </form>

      </div>

    )
  }
}
