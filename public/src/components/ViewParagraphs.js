import React from 'react';
import AddParagraph from './AddParagraph';
import ParagraphList from './ParagraphList';
import { startAddParagraph } from '../actions/paragraphs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class ViewParagraphs extends React.Component{
  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    chapter_number:localStorage.getItem('chapter_number'),
    page_number:localStorage.getItem('page_number')
  }



  render(){
console.log(this.props);
        return(
          <div  className="container" >
          <div className="container-view-slug">


        <p className="slug">


        <span>Notes for  <Link className="number-list-item"
        to={`/viewNotes/${this.state.title}/${localStorage.getItem('book_id')}`}>

        {this.state.title}
        </Link>  Chapter {this.state.chapter_number}  {this.state.page_number && <span> Page {this.state.page_number}</span>}
        </span>
        </p>


          </div>


         <ParagraphList  />
          <AddParagraph
           history={this.props.history}
          title={this.state.title}
          author_last_name={this.state.author_last_name}
          author_first_name={this.state.author_first_name}

          />

           </div>

      )
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddPargraph: (paragraph)=> dispatch(startAddPargraph(paragraph)),

})


export default connect(undefined, mapDispatchToProps)(ViewParagraphs)
