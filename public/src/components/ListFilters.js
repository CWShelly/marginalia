import React from 'react';
import { connect } from 'react-redux';


import { setTextFilter, setTagFilter, setInterestFilter, setBookTagtFilter} from "../actions/filters";

export class ListFilters extends React.Component{


  onTextChange=(e)=>{
   this.props.setTextFilter(e.target.value);
 }

 onTagChange=(e)=>{

  this.props.setTagFilter(e.target.value);
}

onBookTagChange=(e)=>{
  console.log(e.target.value);

 this.props.setBookTagFilter(e.target.value);
}

onInterestChange=(e)=>{
  console.log(e.target.value);

 this.props.setInterestFilter(e.target.value);
}

  render(){
console.log(this.props.history.location.pathname.slice(1,7));
    return(
      <div>
  {this.props.history.location.pathname.slice(1,7) !== "browse" &&
  <div>
    <label><i className="fa fa-search"></i>{" "}<span className="search">Search</span>
     {this.props.history.location.pathname.slice(1,10) ===
      'viewNotes' ? 'text ' : ' text '}:</label>
        <input type="text" value={this.props.filters.text} onChange={
            this.onTextChange
          }/>


      <div>
      <label> <i className="fa fa-search"></i>{" "} <span className="search">Search</span> {this.props.history.location.pathname.slice(1,10) ===
      'viewNotes' ? 'tags' : ' tags'}:</label>
        <input type="text" value={this.props.filters.tag} onChange={
            this.onTagChange
          }/>
      </div>

      <label>Search book tags</label>
      <input type="text" value={this.props.filters.bookTag} onChange={
          this.onBookTagChange
        }/>
      </div>
}

      {this.props.history.location.pathname.slice(1,7) === "browse" &&
        <div>
    <label><i className="fa fa-search"></i>{" "}<span className="search">Search by Interests</span></label>
        <input type="text" value={this.props.filters.interest} onChange={
            this.onInterestChange
          }/>
      </div>}

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
    setBookTagFilter: (bookTags)=>dispatch(setBookTagFilter(bookTags)),
  setInterestFilter: (interest)=> dispatch(setInterestFilter(interest))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)
