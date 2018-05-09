import React from 'react';
import { connect } from 'react-redux';
import PageListItem from './PageListItem';
import selectPages from '../selectors/pages';

export class PageList extends React.Component{

 render(){
console.log(this.props);
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
console.log(state);


      return {
        pages: selectPages(state.pages)

      }


}



export default connect(mapStateToProps)(PageList);
