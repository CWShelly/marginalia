

import React from 'react';
import AddProfile from './AddProfile';

import { startAddProfile } from '../actions/profiles';
import { getUsers } from '../actions/users';
import { connect } from 'react-redux';


export class Profile extends React.Component{

constructor(props){
  super(props);
  this.state={

  }
}

  onSubmit=(profile)=>{
     this.props.startAddProfile(profile);
     this.props.history.push(`/`)
  }



  displayAddNote =()=>{
    this.setState((prevState)=>({
      display: !prevState.display
    }))
  }

componentDidMount(){
console.log(this.props);
 // console.log(this.props.profile.user_id);
 if(this.props.profile){
    localStorage.setItem('browse_id', this.props.profile.user_id)
 }

}


render(){

  return(
    <div className="container">
    <div>

<div>
    {this.props.profile &&
    <div><p>{this.props.profile.user_name}</p>
    <p>Bio: {this.props.profile.user_bio}</p>
     <p>Location: {this.props.profile.user_location}</p>
    </div>}


  {this.props.profile.profile_image && <img src={this.props.profile.profile_image} height="50" width="42" />}
<div>

    <div className="view">

   {!this.props.profile && <AddProfile history={this.props.history}/>}
    </div>

    </div>
    {this.state.user_name}


     </div>

  )
}
}


const mapStateToProps = (state)=>{
console.log(state);

      return {
       profile: state.profiles[0],


      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddProfile: (profile)=> dispatch(startAddProfile(profile)),
     // getUsers: dispatch(getUsers())
})



 export default connect(mapStateToProps, mapDispatchToProps)(Profile);
