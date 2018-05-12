//mine
 import React from 'react';
 import { connect } from 'react-redux';
 import PageForm from './PageForm';
 import { startEditPage, startRemovePage} from '../actions/pages';
 import { startRemoveParagraph } from '../actions/paragraphs';
 import getSubIds from "../selectors/genericRemove";
 import filterThis from "../selectors/genericSelector";
 import filterMore from "../selectors/genericIdFinder";


 export class EditPage extends React.Component{
   onSubmit=(page)=>{

     this.props.startEditPage(this.props.page.id, page);
     this.props.history.push('/')
   }

   onRemove=()=>{

     this.props.startRemovePage({id: this.props.page.id})
         for(let i = 0; i<this.props.filtered.length; i++){

           this.props.startRemoveParagraph({id: this.props.filtered[i].id})
         }

                this.props.history.push('/');

   }

   render(){

     return(
       <div>
       <div>
     <p>Editing for page number {this.props.page.page_number}</p>

       </div>

              <PageForm
 history={this.props.history}
               page={this.props.page}
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
    page: state.pages.find((page)=>page.id === props.match.params.id),
    filtered: filterThis(state.paragraphs, 'page_id')

  }

}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditPage:(id, page)=> dispatch(startEditPage(id, page)),

    startRemovePage: (data)=> dispatch(startRemovePage(data)),
    startRemoveParagraph: (data)=>dispatch(startRemoveParagraph(data))

  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
