import React from 'react';
import { connect } from 'react-redux';
import { startAddParagraph } from '../actions/paragraphs';

import ParagraphForm   from './ParagraphForm';
import filterThis from '../selectors/genericSelector';
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
        {this.state.error && <p className="form-error"> {this.state.error}</p>}
       <ParagraphForm
       history={this.props.history}
         onSubmit={(paragraph)=>{
         if(redundantParagraphs(this.props.paragraphs, parseInt(paragraph.paragraph_number), 'paragraph_number' ) ){
           this.state.error = ''
           this.props.startAddParagraph(paragraph)
         }
         else{

           this.setState(() => ({error: 'Already picked this number'}))
         }

       }}
       />
      </div>
    )
  }
}


const mapStateToProps = (state)=>{

      return {
        paragraphs: filterThis(state.paragraphs, 'page_id')

      }
}

const mapDispatchToProps = (dispatch)=> ({
     startAddParagraph: (paragraph)=> dispatch(startAddParagraph(paragraph))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddParagraph)
