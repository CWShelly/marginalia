import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ChapterListItem extends React.Component{


  onHandleClick=()=>{
     localStorage.setItem('chapter_id', this.props.id)
     localStorage.setItem('chapter_number',this.props.chapter_number)
  }

  render(){


    return(

      <div>

        <li> <Link   onClick={this.onHandleClick}
        to={`/page/${this.props.chapter_number}/${this.props.id}`} title={this.props.title}>

        Chapter {this.props.chapter_number}</Link>    <Link    onClick={this.onHandleClick} to={`/editChapter/${this.props.id}`}>
            <span className="list-paragraph-item-reference" >Edit<i className="fa fa-wrench"></i></span>
                </Link></li>

</div>


    )
  }
}


export default ChapterListItem;
