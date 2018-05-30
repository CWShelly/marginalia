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

    <label>Search {this.props.history.location.pathname.slice(1,10) ===
      'viewNotes' ? 'this book' : 'your text '}:</label>
        <input type="text" value={this.props.filters.text} onChange={
            this.onTextChange
          }/>


            <div>
            <label>Search {this.props.history.location.pathname.slice(1,10) ===
            'viewNotes' ? 'this book' : 'your tags'}:</label>
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
