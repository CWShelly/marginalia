

import React from 'react';
import AddProfile from './AddProfile';

import { startAddProfile } from '../actions/profiles';
import { getUsers } from '../actions/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

 if(this.props.profile){
    localStorage.setItem('browse_id', this.props.profile.user_id)
 }

}


render(){
 
  return(
    <div className="container">

    <div className="view">


         {!this.props.profile &&
           <AddProfile history={this.props.history}/>}
    </div>
    {this.props.profile &&
    <div>

    <div>

   <div className="profile-container">
          {this.props.profile &&
          <div><p>{this.props.profile.user_name}</p>
          <p>Bio: {this.props.profile.user_bio}</p>
           <p>Location: {this.props.profile.user_location}</p>
        </div>}


      {this.props.profile.profile_image &&
         <img className="profile-image" src={this.props.profile.profile_image}  />}
    </div>



    </div>
    <Link className="edit" to={`/editProfile/${this.props.profile.id}`}>
     <span className="book-item-edit">Edit{' '}</span><i className="fa fa-wrench"></i>
    </Link>
</div>
}
     </div>

  )
}
}


const mapStateToProps = (state)=>{


    if(state.profiles){
          return {
           profile: state.profiles[0],
          }
    }
    else{
      return{
        profile: []
      }
    }

}

const mapDispatchToProps = (dispatch)=> ({
     startAddProfile: (profile)=> dispatch(startAddProfile(profile)),
     // getUsers: dispatch(getUsers())
})



 export default connect(mapStateToProps, mapDispatchToProps)(Profile);
