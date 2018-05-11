import React from 'react';
import { connect } from 'react-redux';
import ParagraphListItem from './ParagraphListItem';
    import selectParagraph from '../selectors/paragraphs';




export class ParagraphList extends React.Component{

 render(){
//    console.log(this.props);
// console.log(this.props.paragraphs);
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
      // console.log(state.paragraphs);

      return {
        paragraphs: selectParagraph(state.paragraphs, 'page_id')
      }


}



export default connect(mapStateToProps)(ParagraphList);
