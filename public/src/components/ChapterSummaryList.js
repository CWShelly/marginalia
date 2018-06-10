import React from 'react';
import { connect } from 'react-redux';
import ChapterSummaryListItem from './ChapterSummaryListItem';

import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';
import { startSetSummaries } from '../actions/chapterSummary';


export class ChapterSummaryList extends React.Component{
  state = {
    display: false,
    chapter_number: '',
    title: localStorage.getItem('title')
  }

  componentDidMount(){
    console.log(this.props);
 this.props.startSetSummaries()
  }

  render(){
console.log(this.props.summaries);
       return(
        <div className="container">
        <ul className="reverse-list">
        {this.props.summaries.map((summary)=>{
          return <ChapterSummaryListItem key={summary.id} history={this.props.history} {...summary} />
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

const mapDispatchToProps = (dispatch)=>{
  return{
    startSetSummaries: ()=>{dispatch(startSetSummaries())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChapterSummaryList);
