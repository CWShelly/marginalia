import React from 'react';
import { connect } from 'react-redux';
import { startAddParagraph } from '../actions/paragraphs';

import { ParagraphForm }  from './ParagraphForm';
import selectParagraphs from '../selectors/paragraphs';
import redundantParagraphs from '../selectors/redundant';



export class AddParagraph extends React.Component{


  constructor(props){
    super(props);
      this.state={
       error:''
      }
  }

  render(){

    return (
      <div>

       <ParagraphForm

         onSubmit={(paragraph)=>{
         if(redundantParagraphs(this.props.paragraphs, parseInt(paragraph.paragraph_number), 'paragraph_number' ) ){
           this.state.error = ''
           this.props.startAddParagraph(paragraph)
         }
         else{
           
           this.setState(() => ({error: 'Already picked this number'}))
         }

       }}  error={this.state.error}
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
