import React from 'react';
import AddPage from './AddPage';
import PageList from './PageList';
import { Link } from 'react-router-dom';
import { startAddPage } from '../actions/pages';

import { connect } from 'react-redux';


export class ViewPages extends React.Component{

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    chapter_number:localStorage.getItem('chapter_number'),
    chapter_id:localStorage.getItem('chapter_id')
  }

  onHandleClick = () => {
    this.props.history.goBack();

  }

    render(){

      return(
        <div  className="container"  >




          <p className="slug">

   <span>  <Link className="number-list-item"
       to={`/viewNotes/${this.state.title}/${localStorage.getItem('book_id')}`}>

   {this.state.title}
   </Link> {this.state.chapter_number && <span> chapter {this.state.chapter_number}</span>}</span>
          </p>
        <AddPage
         history={this.props.history}
        title={this.state.title}
        author_last_name={this.state.author_last_name}
        author_first_name={this.state.author_first_name}
        chapter_number={this.state.chapter_number}
        />

        <PageList  />
         </div>
      )
     }
}

const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page)),
})


export default connect(undefined, mapDispatchToProps)(ViewPages)
