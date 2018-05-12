import React from 'react';
import moment from 'moment';

export default class BookForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      author_last_name: props.book ? props.book.author_last_name : '',
      author_first_name:props.book ? props.book.author_first_name : '',
      title:  props.book ? props.book.title : '',
      createdAt: props.book ? moment(props.book.createdAt): moment(),
      error: '',


    }
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
      this.setState(()=>({error: ''}));
      this.props.onSubmit({
        author_last_name: this.state.author_last_name,
        author_first_name: this.state.author_first_name,
        title: this.state.title,
        createdAt: this.state.createdAt.valueOf(),

      })

      if(!this.state.error){
        this.state.author_last_name = "";
        this.state.author_first_name = "";
        this.state.title = "";
      }
    }

  }



  render(){
       
    return(
      <div className="container-book-form">


      {this.state.error && <p  >{this.state.error}</p>}
      <form   onSubmit={this.onSubmit}>

      <input className="book-input"
      type="text"
      placeholder="Author Last Name"
      value={this.state.author_last_name}
      onChange={this.onAuthorLastNameChange}
      />


      <input  className="book-input"

      type="text"
      placeholder="Author First Name"
      value={this.state.author_first_name}
      onChange={this.onAuthorFirstNameChange}
      />

      <input  className="book-input"
      type="text"
      placeholder="Title"
      value={this.state.title}
      onChange={this.onTitleChange}
      />


      <button className="form-button-book">  {this.props.history.location.pathname === '/' ? 'Add' : 'Edit'} Book</button>

      </form>

      </div>
    )
  }

}
