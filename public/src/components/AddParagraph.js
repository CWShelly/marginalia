import React from 'react';
import { connect } from 'react-redux';
import { startAddParagraph } from '../actions/paragraphs';

import { ParagraphForm }  from './ParagraphForm';
import selectParagraphs from '../selectors/paragraphs';
import redundantParagraphs from '../selectors/redundant';



export class AddParagraph extends React.Component{


  constructor(props){
    super(props);

  }

  render(){

    return (
      <div>

       <ParagraphForm

         onSubmit={(paragraph)=>{
         if(redundantParagraphs(this.props.paragraphs, parseInt(paragraph.paragraph_number), 'paragraph_number' ) ){
           this.props.startAddParagraph(paragraph)
         }
         else{
           console.log('already did this paragraph');
         }


         }}
       />
      </div>
    )
  }
}


const mapStateToProps = (state)=>{


      return {

        _paragraphs: selectParagraphs(state.paragraphs, 'page_id'),
        paragraphs: selectParagraphs(state.paragraphs, 'page_id')
        // redundant:redundantParagraph(state.paragraphs, 'page_id', this.props.paragraph_number, 'paragraph_number')

      }
}

const mapDispatchToProps = (dispatch)=> ({
     startAddParagraph: (paragraph)=> dispatch(startAddParagraph(paragraph))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddParagraph)
