import React from 'react';
import { connect } from 'react-redux';
import { startAddChapterSummary } from '../actions/chapterSummary';
import ChapterSummaryForm from './ChapterSummaryForm';



export class AddChapterSummary extends React.Component{

 onSubmit=(note)=>{
   console.log(note);

     this.props.startAddChapterSummary(note);

  }

  render(){

    return (
      <div>
       <ChapterSummaryForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}

const mapStateToProps =(state, props)=>{

  return{
    note: 'x'
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddChapterSummary: (note)=> dispatch(startAddChapterSummary(note)),

})


export default connect(mapStateToProps, mapDispatchToProps)(AddChapterSummary)
