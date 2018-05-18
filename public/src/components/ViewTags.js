import React from 'react';
import AddTag from './AddTag';
import TagsList from './TagsList';
import { startAddTag } from '../actions/tags';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export class ViewTags extends React.Component{
  state = {
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    chapter_number:localStorage.getItem('chapter_number'),
    page_number:localStorage.getItem('page_number')
  }





  render(){

    return(
        <div  className="container" >

        <div className="container-view-slug">
            <p className="slug">
              View Tags
            </p>

          </div>

         <TagsList  />
          <AddTag
           history={this.props.history}
          />

           </div>

      )
  }
}


const mapDispatchToProps = (dispatch)=> ({

     startAddTag: (tag)=> dispatch(startAddTag(tag)),

})


export default connect(undefined, mapDispatchToProps)(ViewTags)
