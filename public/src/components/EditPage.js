//mine
 import React from 'react';
 import { connect } from 'react-redux';
 import PageForm from './PageForm';
 import { startEditPage, removePage} from '../actions/pages';

console.log('edit  page');
 export class EditPage extends React.Component{
   onSubmit=(page)=>{

     this.props.startEditPage(this.props.page.id, page);
     this.props.history.push('/')
   }

   onRemove=()=>{
     this.props.removePage({id: this.props.page.id})
   }

   render(){

     return(
       <div>
       <div>
       <p>Editing for page number {this.props.page.page_number}</p>

       </div>

              <PageForm

               page={this.props.page}
               onSubmit={
                this.onSubmit}
               />

      <button onClick={this.onRemove}>Delete Page</button>
     </div>
     )
   }
 }

 const mapStateToProps = (state, props)=>{

  return {
    page: state.pages.find((page)=>page.id === props.match.params.id),
  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditPage:(id, page)=> dispatch(startEditPage(id, page)),
    removePage: (data)=> dispatch(removePage(data)),
    // startRemovePageh: (data)=> dispatch(startRemoveParagraph(data)),

  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
