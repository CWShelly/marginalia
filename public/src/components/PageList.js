import React from 'react';
import { connect } from 'react-redux';
import PageListItem from './PageListItem';
import filterThis from '../selectors/genericSelector';

export class PageList extends React.Component{

 render(){

   return(
     <ul>
      {this.props.pages.map((page)=>{
        return <PageListItem key={page.id} {...page} />
      })}

      </ul>

   )
 }

}


const mapStateToProps = (state)=>{


      return {
        pages: filterThis(state.pages, 'chapter_id')

      }


}



export default connect(mapStateToProps)(PageList);
