import React from 'react';
import { connect } from 'react-redux';
import { startAddPage } from '../actions/pages';
import PageForm from './PageForm';



export class AddPage extends React.Component{

 onSubmit=(page)=>{

     this.props.startAddPage(page);
     this.props.history.push('/')
  }

  render(){
    return (
      <div>
       <PageForm
         onSubmit={this.onSubmit}
       />
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page))
})
export default connect(undefined, mapDispatchToProps)(AddPage)
