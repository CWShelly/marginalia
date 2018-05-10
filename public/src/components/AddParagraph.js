import React from 'react';
import { connect } from 'react-redux';
import { startAddParagraph } from '../actions/paragraphs';
import ParagraphForm from './ParagraphForm';



export class AddParagraph extends React.Component{

 onSubmit=(paragraph)=>{

     this.props.startAddParagraph(paragraph);
     // this.props.history.push('/')
      // this.props.history.push(`/paragraph/${page.page_number}`)
  }

  render(){
    console.log(this.props);
    console.log(localStorage.getItem('page_number'));
    return (
      <div>

       <ParagraphForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddParagraph: (paragraph)=> dispatch(startAddParagraph(paragraph))
})
export default connect(undefined, mapDispatchToProps)(AddParagraph)
