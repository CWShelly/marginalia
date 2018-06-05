import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserListItem extends React.Component{
 

  render(){

    return(


        <div className="book-list-item-subcontainer">


  <li>{this.props.user_name}</li>


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
