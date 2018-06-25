import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// TODO: fix edit link visibility

 class ChapterSummaryListItem extends React.Component{
      render(){
            return(
              <div>
              <p   >{this.props.summary}</p>
              <div  >
              {this.props.title} chapter:{this.props.chapter_number}

                <Link to={`/editSummary/${this.props.id}`}>Edit</Link>
              </div>
              </div>
            )
      }
}



export default ChapterSummaryListItem;
