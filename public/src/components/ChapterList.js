import React from 'react';
import { connect } from 'react-redux';
import ChapterListItem from './ChapterListItem';
import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';
import filter from '../selectors/filter';

export class ChapterList extends  React.Component{

 render(){


   return(
<div>
{this.props.chapters.length === 0 && <p>You have not added any chapters, yet.</p>}
<ul>
      {this.props.chapters.map((chapter)=>{
        return <ChapterListItem key={chapter.id} { ...chapter} />
      })}

      </ul>
</div>
   )
 }
}

const mapStateToProps = (state)=>{
console.log(state.paragraphs);
      return {
       chapters: filterThis(state.chapters, 'book_id'),
       filteredChapters: filter(state.paragraphs, 'x')
      }
}


export default connect(mapStateToProps)(ChapterList);
