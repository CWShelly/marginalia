//mine
 import React from 'react';
 import { connect } from 'react-redux';
 import ParagraphForm from './ParagraphForm';
 import { startEditParagraph, startRemoveParagraph } from '../actions/paragraphs';

console.log('edit paragraph page');
 export class EditParagraph extends React.Component{
   onSubmit=(paragraph)=>{

     this.props.startEditParagraph(this.props.paragraph.id, paragraph);

     this.props.history.push('/')
   }

   onRemove=()=>{
     this.props.startRemoveParagraph({id: this.props.paragraph.id})
       this.props.history.push('/');
   }

   render(){

     return(
       <div>
       <div>
       <p>Editing for paragraph number {this.props.paragraph.paragraph_number}</p>
       <p>Original Note: {this.props.paragraph.note}</p>
       </div>

              <ParagraphForm
              history={this.props.history}
               paragraph={this.props.paragraph}
               onSubmit={
                this.onSubmit}
               />

  <button className="form-button-book" onClick={this.onRemove}>Delete<i className="fa fa-trash-o"></i></button>
     </div>
     )
   }
 }

 const mapStateToProps = (state, props)=>{

  return {
    paragraph: state.paragraphs.find((paragraph)=>paragraph.id === props.match.params.id),
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditParagraph:(id, paragraph)=> dispatch(startEditParagraph(id, paragraph)),

    startRemoveParagraph: (data)=> dispatch(startRemoveParagraph(data)),


  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditParagraph);
