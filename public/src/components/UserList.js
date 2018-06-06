import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';




export class UserList extends React.Component{


 render(){

   return(
     <div className="book-container" >
   
      {this.props._users.map((_user)=>{
        return <UserListItem key={_user.user_id} { ..._user} />
      })}

      </div>

   )
 }

}


const mapStateToProps = (state)=>{

let x = state._users.map((a)=>{
  return a.profiles
})

let y = x.map((b)=>{
  return Object.keys(b)
})


 let z = x.map((b,i)=>{

   return b[y[i]]
 })

      return {
        _users:z

      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddBook: (book)=> dispatch(startAddBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
