import React from 'react';
import moment from 'moment';

export default class  PageForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.page ? moment(props.page.createdAt): moment(),
      page_number: props.page ? props.page.page_number : '',
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
    console.log(this.props);
    return(
      <div >
          {this.state.error && <p className="form-error" >{this.state.error}</p>}
        <form
         history={this.props.history}
        onSubmit={this.onSubmit}>
<label>{this.props.history.location.pathname.slice(1,5) === 'edit' ? 'Edit' : 'Add'} page number:</label>
        <input  className="paragraph-input" type="number"
        onChange={this.onChange}
          value={this.state.page_number}
        />
    <button className="" ><i className="fa fa-check"></i></button>
        </form>

      </div>

    )
  }
}
