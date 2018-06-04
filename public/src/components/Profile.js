

import React from 'react';
import AddProfile from './AddProfile';

import { startAddProfile } from '../actions/profiles';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


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

render(){

  return(
    <div className="container">
    <div> <h1 >My Profile</h1>
    <p>{this.props.profile.user_name}</p>
     <p>{this.props.profile.user_bio}</p>
      <p>{this.props.profile.user_location}</p>
    <div className="view">

   <AddProfile history={this.props.history}/>
    </div>

    </div>
    {this.state.user_name}


     </div>

  )
}
}


const mapStateToProps = (state)=>{
  

console.log(state.profiles[0]);
      return {
       profile: state.profiles[0]

      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddProfile: (profile)=> dispatch(startAddProfile(profile))
})



 export default connect(mapStateToProps, mapDispatchToProps)(Profile);
