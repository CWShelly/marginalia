import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


 class ChapterSummaryListItem extends React.Component{
      render(){
            return(
              <div>
              <p className="number-list-item-no-hover" >{this.props.summary}</p>
              <div className="list-paragraph-item-reference-paragraph">
              {this.props.title} chapter:{this.props.chapter_number}
                <Link to={`/editSummary/${this.props.id}`}>Edit</Link>
              </div>
              </div>
            )
      }
}



export default ChapterSummaryListItem;
