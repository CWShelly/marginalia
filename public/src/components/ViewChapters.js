import React from 'react';
import AddChapter from './AddChapter';
import ChapterList from './ChapterList';
import { startAddChapter } from '../actions/chapters';
import AddPage from './AddPage';
import PageList from './PageList'
import { startAddPage } from '../actions/pages'

import { connect } from 'react-redux';

export class ViewChapters extends React.Component{
  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }

render(){


  return(
    <div>
     {this.props.match.params.title}

    <AddChapter
     history={this.props.history} title={this.state.title}
    author_last_name={this.state.author_last_name}
    author_first_name={this.state.author_first_name}
    />
    <ChapterList history={this.props.history} />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddChapter: (chapter)=> dispatch(startAddChapter(chapter)),
     startAddPage: (page)=> dispatch(startAddPage(page))
})


export default connect(undefined, mapDispatchToProps)(ViewChapters)
