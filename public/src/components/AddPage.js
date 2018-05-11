import React from 'react';
import { connect } from 'react-redux';
import { startAddPage } from '../actions/pages';
import PageForm from './PageForm';

import filterThis from '../selectors/genericSelector';
import rP from '../selectors/redundant';

export class AddPage extends React.Component{

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
       <PageForm
       onSubmit={(page)=>{
       if(rP(this.props.filteredCollection, parseInt(page.page_number), 'page_number' ) ){
         this.setState(() => ({error: ''}))
          this.props.startAddPage(page)
          this.props.history.push(`/page/${page.page_number}`);
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

console.log(state);
      return {

        filteredCollection: filterThis(state.pages, 'chapter_id')

      }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddPage)
