import React from 'react';
import { connect } from 'react-redux';
import { startAddChapter } from '../actions/chapters';
import ChapterForm from './ChapterForm';



export class AddChapter extends React.Component{

 onSubmit=(chapter)=>{

 console.log(chapter);
     this.props.startAddChapter(chapter)

    this.props.history.push(`/page/${chapter.chapter_number}`)


  }



  render(){
console.log(this.props);
    return (
      <div  >

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
