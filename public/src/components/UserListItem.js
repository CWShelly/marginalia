import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserListItem extends React.Component{

 onHandleClick = ()=>{
   console.log('clicked');
   console.log(this.props.user_id);
   localStorage.setItem('browse_id', this.props.user_id)
 }

  render(){

    return(


      <div className="book-list-item-subcontainer">


        <li><Link to={`/browseOtherLibraries`} onClick={this.onHandleClick}>{this.props.user_name}</Link></li>


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
