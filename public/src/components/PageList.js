import React from 'react';
import { connect } from 'react-redux';
import PageListItem from './PageListItem';
import filterThis from '../selectors/genericSelector';

export class PageList extends React.Component{

 render(){

   return(
     <div>
     {this.props.pages.length === 0 && <p>You have not added any pages for this chapter, yet.</p>}
     <ul>
      {this.props.pages.map((page)=>{
        return <PageListItem key={page.id} {...page} />
      })}

      </ul>
     </div>
   )
 }

}


const mapStateToProps = (state)=>{


      return {
        pages: filterThis(state.pages, 'chapter_id')

      }


}



export default connect(mapStateToProps)(PageList);
