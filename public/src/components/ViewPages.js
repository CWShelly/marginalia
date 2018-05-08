import React from 'react';
import AddPage from './AddPage';
import PageList from './PageList';
import { startAddPage } from '../actions/pages';

import { connect } from 'react-redux';


export class ViewPages extends React.Component{


render(){
console.log(this.props);
  return(
    <div>
    Page list
    <AddPage history={this.props.history} />
    <PageList history={this.props.history} />
     </div>
  )
 }
}

const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page)),

})


export default connect(undefined, mapDispatchToProps)(ViewPages)
