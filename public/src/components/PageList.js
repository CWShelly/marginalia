import React from 'react';
import { connect } from 'react-redux';
import PageListItem from './PageListItem';
import selectPages from '../selectors/pages';

export class PageList extends React.Component{

 render(){
console.log(this.props);
   return(
     <div>

      <h1>Page List</h1>
      {this.props.pages.map((page)=>{
        return <PageListItem key={page.id} {...page} />
      })}

      </div>

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
