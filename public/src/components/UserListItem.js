import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

class UserListItem extends React.Component{

 onHandleClick = ()=>{
   console.log('clicked');
   // console.log(this.props.user_id);
   localStorage.setItem('browse_id', this.props.user_id)

 }

  render(){
console.log(this.props);
console.log(this.props.profile_image);
    return(


      <div className="book-list-item-subcontainer">


        <div><Link to={`/browseOtherLibraries`} onClick={this.onHandleClick}>{this.props.user_name}</Link>


        {this.props.interests &&
        <div> interests: {' '}
          {Object.keys(this.props.interests).map((item)=>{
           return  <a className="tag"
           key={uuidv4()}>{item + '  '}</a>
         })}
        </div>}

        {this.props.profile_image &&
           <img className="profile-image" src={this.props.profile_image}  />}
</div>
       </div>


    )
  }
}


const mapStateToProps = (state)=>{

console.log(state);
      return {
        _users:state._users.profiles

      }


}
export default UserListItem;
// export default connect(mapStateToProps)(UserListItem);
