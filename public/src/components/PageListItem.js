import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageListItem extends React.Component{


  onHandleClick=()=>{
 localStorage.setItem('page_id', this.props.id)
  // localStorage.setItem('paragraph_id', this.props.id)
  }
  render(){

console.log(this.props);
    return(
      <div>
      <p> <Link onClick={this.onHandleClick}
      to={`/paragraph/${this.props.page_number}/${this.props.id}`}>page

      {this.props.page_number}</Link></p>


      </div>

    )
  }
}


export default PageListItem;
