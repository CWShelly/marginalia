import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';

class UserListItem extends React.Component{

 onHandleClick = ()=>{

   localStorage.setItem('browse_id', this.props.user_id)

 }

  render(){

    return(


      <div >


        <div><Link to={`/browseOtherLibraries`}
         onClick={this.onHandleClick}>{this.props.user_name}</Link>

        {this.props.tags &&
        <div> interests: {' '}
          {Object.keys(this.props.tags).map((item)=>{
           return  <a
           key={uuidv4()}>{item + '  '}</a>
         })}
        </div>}

        {this.props.profile_image &&
           <img className="rounded-circle profile-image"  src={this.props.profile_image}  />}
</div>
       </div>


    )
  }
}


const mapStateToProps = (state)=>{


      return {
        _users:state._users.profiles

      }


}
export default UserListItem;
// export default connect(mapStateToProps)(UserListItem);
