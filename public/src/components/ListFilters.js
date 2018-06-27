import React from 'react';
import { connect } from 'react-redux';


import { setTextFilter, setTagFilter} from "../actions/filters";

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

  <div>
  {this.props.history.location.pathname.slice(1,7) !== "browse" &&
  <div>
  <div className="form-group ml-4">
    <label><i className="fa fa-search"></i>{" "}<span >Search Text</span>
      </label>
        <input  className="form-control" type="text" value={this.props.filters.text} onChange={
            this.onTextChange
          }/>
          </div>
</div>}

      <div>
        <div className="form-group ml-4">
      <label> <i className="fa fa-search"></i>{" "} <span  >Search Tags</span>
       </label>
        <input className="form-control" type="text" value={this.props.filters.tag} onChange={
            this.onTagChange
          }/>
          </div>
      </div>


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

})

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters)
