import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';
import filters from '../selectors/filter';
import interestFilters from '../selectors/interests_filter';
import { Link } from 'react-router-dom';


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
console.log(state);
let x = state._users.map((a)=>{
  return a.profiles
})

let y = x.map((b)=>{
  return Object.keys(b)
})

console.log(y);
 let z = x.map((b,i)=>{

   return b[y[i]]
 })

 for(let i = 0; i<z.length; i++){
   z[i].interest_keys = Object.keys(z[i].interests)
 }
console.log(z);
      return {
        // _users:z
        _users: interestFilters(z, state.filters)

      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddBook: (book)=> dispatch(startAddBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
