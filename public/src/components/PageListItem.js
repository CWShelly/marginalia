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
<div className="number-list-item-container">


      <li className="pages"> <Link className="number-list-item"  onClick={this.onHandleClick}
      to={`/paragraph/${this.props.page_number}/${this.props.id}`}>

      Page {this.props.page_number}</Link>      <Link   onClick={this.onHandleClick}  to={`/editPage/${this.props.id}`}>
          <span className="list-paragraph-item-reference" >Edit<i className="fa fa-wrench"></i></span>
              </Link>

      </li>
</div>


    )
  }
}


export default PageListItem;
