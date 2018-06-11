import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';
import { startSetBooks } from '../actions/books';
import viewingOtherBooks from '../selectors/viewingOtherBooks';
import interestsFilter from '../selectors/interests_filter';
import uuidv4 from 'uuid/v4';

export class BookList extends React.Component{

constructor(props){
  super(props);
  this.state={
    same: true
  }
}

 componentDidMount(){


  console.log(localStorage.getItem('auth_id')
   === localStorage.getItem('browse_id'));
if(localStorage.getItem('auth_id') !== localStorage.getItem('browse_id')){
  this.setState(()=>{
    same: false
  })
}
  this.props.startSetBooks()
 }


 render(){

   return(
     <div className="book-container" >

      {this.props.books.length === 0 && this.state.same && <p>Add a book to get started</p>}
          {this.props.books.length === 0 && !this.state.same && <p> No books added yet.</p>}
      {this.props.books.map((book)=>{
        return <BookListItem key={uuidv4()} history={this.props.history} { ...book} />
      })}

      </div>

   )
 }

}


const mapStateToProps = (state, props)=>{

console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));


if(localStorage.getItem('auth_id') === localStorage.getItem('browse_id')

&& !props.history
){
console.log("viewing your library");
  return {
    books:selectBooks(state.books)
  }
}
else if(localStorage.getItem('auth_id') === localStorage.getItem('browse_id')
  && props.history.location.pathname.slice(1,7) === "browse"){


let xUsers = state._users.map((a)=>{
  return a.books
})

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

return{

    books:(viewingOtherBooks(foo()))

}
}

else{

  console.log("viewing other library");

  return {
    books:(viewingOtherBooks(state.books))
  }
}

}

const mapDispatchToProps = (dispatch, props)=>{


  return{
    startSetBooks: ()=>{dispatch(startSetBooks())}

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
