import React from 'react';
import AddPage from './AddPage';
import PageList from './PageList';
import { startAddPage } from '../actions/pages';

import { connect } from 'react-redux';


export class ViewPages extends React.Component{

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }

    render(){
      return(
        <div>
        Page list for {this.state.title}
        <AddPage history={this.props.history}
        title={this.state.title}
       author_last_name={this.state.author_last_name}
       author_first_name={this.state.author_first_name}
        />
        <PageList history={this.props.history} />
         </div>
      )
     }
}

const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page)),
})


export default connect(undefined, mapDispatchToProps)(ViewPages)
