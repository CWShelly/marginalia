import React from 'react';
import { connect } from 'react-redux';
import ParagraphListItem from './ParagraphListItem';

import filterThis from '../selectors/genericSelector';




export class ParagraphList extends React.Component{

 render(){

   return(
     <div className="container">
     <ul>
      {this.props.paragraphs.map((paragraph)=>{
        return <ParagraphListItem key={paragraph.id} {...paragraph} />
      })}
      </ul>
      </div>

   )
 }

}


    const mapStateToProps = (state)=>{
     

      return {
        paragraphs: filterThis(state.paragraphs, 'page_id')
      }


}



export default connect(mapStateToProps)(ParagraphList);
