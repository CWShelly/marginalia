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

  componentDidMount(){
    console.log(this.props.location.pathname.slice(1,14));
    if(this.props.location.pathname.slice(1,14) === "viewSummaries" && localStorage.getItem('auth_id') === localStorage.getItem('browse_id') ){
      console.log('going to dashboard');
           this.props.history.push('/')

    }
    console.log('auth id', localStorage.getItem('auth_id'));
    console.log('browse_id', localStorage.getItem('browse_id'));
  console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));
  }

  displayAddNote =()=>{

    this.setState((prevState)=>({
      display: !prevState.display
    }))


  }


render(){
  // console.log(this.props);
  console.log(this.props.location.pathname);
    console.log(this.props.location.pathname.slice(1,14));
  console.log(localStorage.getItem('auth_id'));
  console.log(localStorage.getItem('browse_id'));
console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));
  return(
    <div  >
    <div> <h1>My Summaries for {this.state.title}</h1>

    <div  >



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
