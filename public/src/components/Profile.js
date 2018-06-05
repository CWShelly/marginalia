

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
 // getUsers();
 // console.log(getUser[0]);
}


render(){
console.log(this.props);
  return(
    <div className="container">
    <div> <h1 >My Profile</h1>

    {this.props.profile &&
    <div><p>{this.props.profile.user_name}</p>
    <p>{this.props.profile.user_bio}</p>
     <p>{this.props.profile.user_location}</p>
    </div>}





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

 console.log(state._users);
      return {
       profile: state.profiles[0],
       others: state._users

      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddProfile: (profile)=> dispatch(startAddProfile(profile)),
     // getUsers: dispatch(getUsers())
})



 export default connect(mapStateToProps, mapDispatchToProps)(Profile);
