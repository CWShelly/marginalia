import React from 'react';
import AddChapterSummary from './AddChapterSummary';
import ChapterSummaryList from './ChapterSummaryList';
import { startAddSummary } from '../actions/chapterSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListFilters from './ListFilters'

export class ViewChapterSummaryPage extends React.Component{

  state = {
    display: false,
    title: localStorage.getItem('title'),
    chapter_number: '',

  }


  onSubmit=(note)=>{
     this.props.startAddChapterSummary(note);
     this.props.history.push(`/viewSummaries/${this.props.match.params.title}`)
  }



  displayAddNote =()=>{

    this.setState((prevState)=>({
      display: !prevState.display
    }))


  }
 

render(){

  return(
    <div className="container">
    <div> <h1>My Summaries for {this.state.title}</h1>

    <div className="view">



        {localStorage.getItem('auth_id') === localStorage.getItem('browse_id') && <AddChapterSummary history={this.props.history}/>}
    </div>

    </div>
    <ChapterSummaryList history={this.props.history} />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddChapterSummary: (note)=> dispatch(startAddChapterSummary(note))
})


export default connect(undefined, mapDispatchToProps)(ViewChapterSummaryPage)
