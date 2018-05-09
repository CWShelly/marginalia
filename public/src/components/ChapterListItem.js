import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// TODO: add editChapter
class ChapterListItem extends React.Component{


  onHandleClick=()=>{
     localStorage.setItem('chapter_id', this.props.id)
     localStorage.setItem('chapter_number',this.props.chapter_number)
  }

  render(){


    return(
      <div>

        <p> <Link onClick={this.onHandleClick}
        to={`/page/${this.props.chapter_number}/${this.props.id}`} title={this.props.title}>

        Chapter {this.props.chapter_number}</Link></p>


 chapter list item page
      </div>

    )
  }
}


export default ChapterListItem;
