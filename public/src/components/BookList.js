import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';
import { startSetBooks } from '../actions/books';
import viewingOtherBooks from '../selectors/viewingOtherBooks';
import interestsFilter from '../selectors/interests_filter';
import uuidv4 from 'uuid/v4';

export class BookList extends React.Component{
 componentDidMount(){
this.props.startSetBooks()
 }


 render(){
console.log(this.props);
   return(
     <div className="book-container" >

      {this.props.books.length === 0 && <p>Add a book to get started</p>}
      {this.props.books.map((book)=>{
        return <BookListItem key={uuidv4()} history={this.props.history} { ...book} />
      })}

      </div>

   )
 }

}


const mapStateToProps = (state, props)=>{

console.log('auth_id', localStorage.getItem('auth_id'));
console.log('browse_id', localStorage.getItem('browse_id'));


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
// books: state.books
console.log(state);

let x = state._users.map((a)=>{

  return a.books
})


let foo = ()=>{
  let fooArr =[]
for(let i =0 ; i<x.length; i++){
  fooArr.push(Object.values(x[i]))
}

  let xReduce = fooArr.reduce((ac, cv)=>{
    return ac.concat(cv)
  },[])
  return xReduce;

}

console.log(foo());


return{
    books:(viewingOtherBooks(foo()))
    // books:foo()
}
}

else{
  // console.log(state);
  // for(let i = 0; i<state.books.length; i++){
  //   state.books[i].bookTag_keys = Object.keys(state.books[i].bookTags)
  // }
  console.log("viewing other library");
  // console.log(state);
  return {
    // books:interestsFilters(viewingOtherBooks(state.books), state.filters);
    books:(viewingOtherBooks(state.books))
  }
}

}

const mapDispatchToProps = (dispatch, props)=>{


  return{
    startSetBooks: ()=>{dispatch(startSetBooks())}
    // startSetBooks: startSetBooks()

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
