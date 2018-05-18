import React from 'react';
import AddParagraph from './AddParagraph';
import ParagraphList from './ParagraphList';
import { startAddParagraph } from '../actions/paragraphs';
import { startAddPage, testPages } from '../actions/pages';
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

hasSet = (x)=>{
  return new Promise((resolve, reject)=>{
    this.setState((prevState)=>{
      return{
        page_number: parseInt(prevState.page_number) + 1,
        createdAt : 0
      }
    })
    resolve(x)
    reject('failure')
  })
}

advancePage=()=>{
  const a = this.hasSet();
  a.then(()=>{

    console.log(this.state.page_number);
    this.props.startAddPage({page_number:this.state.page_number})
  })
  .catch((error)=>{
    console.log(error);
    console.log('error');

  })
}

  render(){

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
             <button className="advance-button" onClick={this.advancePage}>Turn Page</button>

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
     startAddPage: (page)=> dispatch(startAddPage(page)),

})


export default connect(undefined, mapDispatchToProps)(ViewParagraphs)
