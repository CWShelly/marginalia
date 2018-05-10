import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageListItem extends React.Component{


  onHandleClick=()=>{
 localStorage.setItem('page_id', this.props.id),
 localStorage.setItem('page_number',this.props.page_number)
  // localStorage.setItem('paragraph_id', this.props.id)
  }
  render(){

    return(

      <li className="pages"> <Link onClick={this.onHandleClick}
      to={`/paragraph/${this.props.page_number}/${this.props.id}`}>

      {this.props.page_number}</Link></li>



    )
  }
}


export default PageListItem;
