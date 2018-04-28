import React from 'react';
import moment from 'moment';

export default class BookForm extends React.Component{
  state = {
    author_last_name: '',
    author_first_name: '',
    title: '',
    createdAt: moment(),
    error: ''
  }

  onAuthorLastNameChange = (e) =>{
   const author_last_name = e.target.value;
   this.setState(()=>({ author_last_name}));
  }
  onAuthorFirstNameChange = (e) =>{
    const author_first_name = e.target.value;
    this.setState(()=>({ author_first_name }));

  }
  onTitleChange = (e) =>{
    const title = e.target.value;
    this.setState(()=>({ title }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if( !this.state.author_last_name || !this.state.title){
      this.setState(()=>({error: 'Please enter at least an author last name and title'}));
    } else{
      this.setState(()=>(error: ''));
      this.props.onSubmit({
        author_last_name: this.state.author_last_name,
        author_first_name: this.state.author_first_name,
        title: this.state.title,
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
      type="text"
      placeholder="Author Last Name"
      autoFocus
      value={this.state.author_last_name}
      onChange={this.onAuthorLastNameChange}
      />
      <input
      type="text"
      placeholder="Author First Name"
      value={this.state.author_first_name}
      onChange={this.onAuthorFirstNameChange}
      />
      <input
      type="text"
      placeholder="title"
      value={this.state.title}
      onChange={this.onTitleChange}
      />
      <button>Add Book</button>
      </form>

      </div>
    )
  }

}
