import React from 'react';
import { connect } from 'react-redux';
import TagListItem from './TagListItem';


export class TagsList extends React.Component{

 render(){

   return(
     <div>
      Tags List
     </div>
   )
 }

}


const mapStateToProps = (state)=>{
console.log(state);

const x = state.notes.map((m)=>{
  return m.tags

})
 

      return {


      }


}



export default connect(mapStateToProps)(TagsList);
