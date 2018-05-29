import React from 'react';
import { connect } from 'react-redux';
import ChapterSummaryListItem from './ChapterSummaryListItem';

import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';



export class ChapterSummaryList extends React.Component{
  state = {
    display: false,
    chapter_number: '',
    title: localStorage.getItem('title')
  }


  render(){

       return(
        <div className="container">
        <ul className="reverse-list">
        {this.props.summaries.map((summary)=>{
          return <ChapterSummaryListItem key={summary.id} {...summary} />
        })}

        </ul>

        </div>
      )
  }
}

const mapStateToProps = (state, props)=>{
console.log(state);

  return{
   summaries: filterThis(state.summaries, 'book_id'),

  }

}



export default connect(mapStateToProps)(ChapterSummaryList);
