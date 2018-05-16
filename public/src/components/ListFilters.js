import React from 'react';
import { connect } from 'react-redux';


import { setTextFilter, sortByChapter} from "../actions/filters";

export class ListFilters extends React.Component{


  onTextChange=(e)=>{
    console.log(e.target.value);
   this.props.setTextFilter(e.target.value);
 }
  render(){

    return(
      <div>
    <label>Search {this.props.history.location.pathname.slice(1,10) === 'viewNotes' ? 'this book' : 'your notes'}:</label>  <input type="text" value={this.props.filters.text} onChange={
            this.onTextChange
          }/>


      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  console.log(state);
  return{
    filters: state.filters
  }
}

const mapDispatchToProps=(dispatch)=>({
  setTextFilter: (text)=>dispatch(setTextFilter(text)),
  sortByChapter: ()=> dispatch(sortByChapter())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)
