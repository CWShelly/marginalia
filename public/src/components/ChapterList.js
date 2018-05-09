import React from 'react';
import { connect } from 'react-redux';
import ChapterListItem from './ChapterListItem';
import { Link } from 'react-router-dom';
import selectChapters from '../selectors/chapters';

export class ChapterList extends  React.Component{

 render(){


   return(
     <div>
      <h1>Chapters List</h1>

      {this.props.chapters.map((chapter)=>{
        return <ChapterListItem key={chapter.id} { ...chapter} />
      })}
      </div>

   )
 }
}

const mapStateToProps = (state)=>{
 
      return {
       chapters: selectChapters(state.chapters)
      }
}


export default connect(mapStateToProps)(ChapterList);
