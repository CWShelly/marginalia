import React from 'react';
import { connect } from 'react-redux';
import { startAddChapter } from '../actions/chapters';
import ChapterForm from './ChapterForm';



export class AddChapter extends React.Component{

 onSubmit=(chapter)=>{


     this.props.startAddChapter(chapter);
     this.props.history.push('/')
  }

  render(){

    return (
      <div>
 
       <ChapterForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddChapter: (chapter)=> dispatch(startAddChapter(chapter))
})
export default connect(undefined, mapDispatchToProps)(AddChapter)
