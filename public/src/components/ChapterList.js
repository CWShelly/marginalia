import React from 'react';
import { connect } from 'react-redux';
import ChapterListItem from './ChapterListItem';
import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';

export class ChapterList extends  React.Component{

 render(){


   return(

<ul>
      {this.props.chapters.map((chapter)=>{
        return <ChapterListItem key={chapter.id} { ...chapter} />
      })}

      </ul>

   )
 }
}

const mapStateToProps = (state)=>{

      return {
       chapters: filterThis(state.chapters, 'book_id')
      }
}


export default connect(mapStateToProps)(ChapterList);
