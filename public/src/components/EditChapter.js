//mine
 import React from 'react';
 import { connect } from 'react-redux';
 import ChapterForm from './ChapterForm';
 import { startEditChapter, startRemoveChapter} from '../actions/chapters';
 import { startRemovePage } from '../actions/pages'
 import { startRemoveParagraph } from '../actions/paragraphs';
 import getSubIds from "../selectors/genericRemove";
 import filterThis from "../selectors/genericSelector";
 import filterSubLevel from "../selectors/genericIdFinder";

console.log('edit  chapter');
 export class EditChapter extends React.Component{
   onSubmit=(chapter)=>{

     this.props.startEditChapter(this.props.chapter.id, chapter);
     this.props.history.push('/')
   }

   onRemove=()=>{


     this.props.startRemoveChapter({id: this.props.chapter.id})

     for(let i = 0;i<this.props.filterSub.length; i++){
       console.log(this.props.filterSub[i].id);
         this.props.startRemoveParagraph({id: this.props.filterSub[i].id})
     }

     for(let i = 0; i<this.props.filtered.length; i++){
        this.props.startRemovePage({id: this.props.filtered[i].id})
     }


        this.props.history.push('/')
   }

   render(){
console.log('rendering edit chapter');
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
    filtered: filterThis(state.pages, 'chapter_id'),
    filterSub: filterSubLevel(state.paragraphs, 'page_id', filterThis(state.pages, 'chapter_id')[0].id)
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditChapter:(id, chapter)=> dispatch(startEditChapter(id, chapter)),
    startRemoveChapter: (data)=> dispatch(startRemoveChapter(data)),
    startRemovePage:(data)=> dispatch(startRemovePage(data)),
    startRemoveParagraph: (data)=>dispatch(startRemoveParagraph(data))

  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditChapter);
