import React from 'react';
import { connect } from 'react-redux';
import { startAddChapter } from '../actions/chapters';
import ChapterForm from './ChapterForm';

import filterThis from '../selectors/genericSelector';
import rP from '../selectors/redundant';

export class AddChapter extends React.Component{

  constructor(props){
    super(props);
      this.state={
       error:''
      }
  }
  render(){
 
    return (
      <div  >
       {this.state.error && <p className="form-error" >{this.state.error}</p>}
       <ChapterForm
       onSubmit={(chapter)=>{
       if(rP(this.props.filteredCollection, parseInt(chapter.chapter_number), 'chapter_number' ) ){
         this.setState(() => ({error: ''}))
          this.props.startAddChapter(chapter)
          this.props.history.push(`/chapter/${chapter.chapter_number}`);
       }
       else{
      console.log('number already picked');
         this.setState(() => ({error: 'Already picked this number'}))
       }

     }}
       />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{

      return {

        filteredCollection: filterThis(state.chapters, 'book_id')

      }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddChapter: (chapter)=> dispatch(startAddChapter(chapter))

})
export default connect(mapStateToProps, mapDispatchToProps)(AddChapter)
