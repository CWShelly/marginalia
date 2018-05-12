//mine
 import React from 'react';
 import { connect } from 'react-redux';
 import ChapterForm from './ChapterForm';
 import { startEditChapter, removeChapter} from '../actions/chapters';

console.log('edit  chapter');
 export class EditChapter extends React.Component{
   onSubmit=(chapter)=>{

     this.props.startEditChapter(this.props.chapter.id, chapter);
     this.props.history.push('/')
   }

   onRemove=()=>{
     this.props.removeChapter({id: this.props.chapter.id})
   }

   render(){
console.log(this.props);
     return(
       <div>
       <div>
       <p>Editing for chapter number {this.props.chapter.chapter_number}</p>

       </div>

              <ChapterForm

               chapter={this.props.chapter}
               onSubmit={
                this.onSubmit}
               />

      <button onClick={this.onRemove}>Delete Chapter</button>
     </div>
     )
   }
 }

 const mapStateToProps = (state, props)=>{

  return {
    chapter: state.chapters.find((chapter)=>chapter.id === props.match.params.id),
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditChapter:(id, chapter)=> dispatch(startEditChapter(id, chapter)),
    removeChapter: (data)=> dispatch(removeChapter(data)),
    // startRemovePageh: (data)=> dispatch(startRemoveParagraph(data)),

  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditChapter);
