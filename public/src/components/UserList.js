import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';
import filters from '../selectors/filter';
import interestFilters from '../selectors/interests_filter';
import BookListItem from './BookListItem';
import viewingOtherBooks from '../selectors/viewingOtherBooks';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';


export class UserList extends React.Component{


 render(){
console.log(this.props);
   return(
     <div className="book-container" >

      {this.props._users.map((_user)=>{
        return <UserListItem key={_user.user_id} { ..._user} />
      })}


      {this.props.books.map((book)=>{
        return <BookListItem key={uuidv4()} history={this.props.history} { ...book} />
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
// console.log(state._users);

let y = x.map((b)=>{
  return Object.keys(b)
})

 let z = x.map((b,i)=>{

   return b[y[i]]
 })

 for(let i = 0; i<z.length; i++){
   z[i].tag_keys = Object.keys(z[i].tags)
 }

 let xUsers = state._users.map((a)=>{
   return a.books
 })


 // console.log(state._users);

 let foo = ()=>{
   let fooArr =[]
 for(let i =0 ; i<xUsers.length; i++){
   fooArr.push(Object.values(xUsers[i]))
 }
   let xReduce = fooArr.reduce((ac, cv)=>{
     return ac.concat(cv)
   },[])
   return xReduce;
 }
   for(let i = 0; i<foo().length; i++){
     foo()[i].tag_keys = Object.keys(foo()[i].tags)
   }

   // console.log(foo());
let fooBooks = viewingOtherBooks(foo())
      return {
        // _users:z
        _users: interestFilters(z, state.filters),
          // books:viewingOtherBooks(foo()),
          books:interestFilters(fooBooks, state.filters)

      }


}

const mapDispatchToProps = (dispatch)=> ({
     startAddBook: (book)=> dispatch(startAddBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
