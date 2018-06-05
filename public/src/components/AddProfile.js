import React from 'react';
import { connect } from 'react-redux';
import { startAddProfile } from '../actions/profiles';
import ProfileForm from './ProfileForm';


export class AddProfile extends React.Component{

 onSubmit=(profile)=>{
console.log(profile);
     this.props.startAddProfile(profile);
     this.props.history.push('/')
  }

  render(){

    return (
      <div>
       <ProfileForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddProfile: (profile)=> dispatch(startAddProfile(profile))
})
export default connect(undefined, mapDispatchToProps)(AddProfile)