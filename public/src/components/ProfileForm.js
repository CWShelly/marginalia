import React from 'react';
import moment from 'moment';

export default class ProfileForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      user_name: props.profile ? props.profile.user_name : '',
      user_bio:props.profile ? props.profile.user_bio : '',
      user_location:  props.profile ? props.profile.user_location : '',
      createdAt: props.book ? moment(props.book.createdAt): moment(),
      error: '',
    }
  }

  onUserNameChange = (e) =>{
   const user_name = e.target.value;
   this.setState(()=>({ user_name}));
  }

  onUserBioChange = (e) =>{
    const user_bio = e.target.value;
    this.setState(()=>({ user_bio }));

  }

  onUserLocationChange = (e) =>{
    const user_location = e.target.value;
    this.setState(()=>({ user_location }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if( !this.state.user_name){
      this.setState(()=>({error: 'Please choose a unique user name'}));
    } else{
      this.setState(()=>({error: ''}));
      this.props.onSubmit({

        user_name: this.state.user_name,
        user_bio: this.state.user_bio,
        user_location: this.state.user_location,
        createdAt: this.state.createdAt.valueOf(),

      })

      if(!this.state.error){
        this.state.user_name = "";
        this.state.user_bio = "";
        this.state.user_location= "";
      }
    }

  }



  render(){

    return(
      <div className="container-book-form">


      {this.state.error && <p className="form-error" >{this.state.error}</p>}
      <form   onSubmit={this.onSubmit}>

      <input className="book-input"
      type="text"
      placeholder="User Name"
      value={this.state.user_name}
      onChange={this.onUserNameChange}
      />


      <input  className="book-input"

      type="text"
      placeholder="Bio"
      value={this.state.user_bio}
      onChange={this.onUserBioChange}
      />

      <input  className="book-input"
      type="text"
      placeholder="Location"
      value={this.state.user_location}
      onChange={this.onUserLocationChange}
      />


      <button className="form-button-book">  Create Profile</button>

      </form>

      </div>
    )
  }

}
