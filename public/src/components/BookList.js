import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import selectBooks from '../selectors/books';
import { startSetBooks } from '../actions/books';
import viewingOtherBooks from '../selectors/viewingOtherBooks';
import interestsFilter from '../selectors/interests_filter';
import uuidv4 from 'uuid/v4';

export class BookList extends React.Component{


  onUnload(e) {
    console.log('unload');
     e.returnValue = 'unloading'
 }
 componentDidMount(){
   console.log('loaded!!!');

      console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));
  // window.addEventListener("beforeunload", this.onUnload)
this.props.startSetBooks()
 }

 // componentWillUnmount() {
 //       window.removeEventListener("beforeunload", this.onUnload)
 //   }


 render(){

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
  console.log('auth id', localStorage.getItem('auth_id'));
  console.log('browse id', localStorage.getItem('browse_id'));
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

// console.log(state);

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

console.log(foo());
return{
      // books:(viewingOtherBooks(addTagKeyArr()))
    books:(viewingOtherBooks(foo()))
    // books:foo()
}
}

else{

  console.log("viewing other library");

  return {
    // books:interestsFilters(viewingOtherBooks(state.books), state.filters);
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
