import React from 'react';
import { connect } from 'react-redux';


import { setTextFilter, setTagFilter, sortByChapter} from "../actions/filters";

export class ListFilters extends React.Component{


  onTextChange=(e)=>{
   this.props.setTextFilter(e.target.value);
 }

 onTagChange=(e)=>{

  this.props.setTagFilter(e.target.value);
}


  render(){

    return(
      <div>

    <label><i className="fa fa-search"></i>{" "}<span className="search">Search</span> {this.props.history.location.pathname.slice(1,10) ===
      'viewNotes' ? 'this book' : ' text '}:</label>
        <input type="text" value={this.props.filters.text} onChange={
            this.onTextChange
          }/>


      <div>
      <label> <i className="fa fa-search"></i>{" "} <span className="search">Search</span> {this.props.history.location.pathname.slice(1,10) ===
      'viewNotes' ? 'this book' : ' tags'}:</label>
        <input type="text" value={this.props.filters.tag} onChange={
            this.onTagChange
          }/>
      </div>

      </div>

    )
  }
}


const mapStateToProps = (state)=>{

  return{
    filters: state.filters
  }
}

const mapDispatchToProps=(dispatch)=>({
  setTextFilter: (text)=>dispatch(setTextFilter(text)),
  setTagFilter: (tags)=>dispatch(setTagFilter(tags)),
  sortByChapter: ()=> dispatch(sortByChapter())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)
