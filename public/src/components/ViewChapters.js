import React from 'react';
import AddChapter from './AddChapter';
import ChapterList from './ChapterList';
import { startAddChapter } from '../actions/chapters';


import AddPage from './AddPage';
import PageList from './PageList'
import { startAddPage } from '../actions/pages'

import { connect } from 'react-redux';


export class ViewChapters extends React.Component{


render(){

  return(
    <div>
    View Chapter Page

    <AddChapter history={this.props.history} />
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
