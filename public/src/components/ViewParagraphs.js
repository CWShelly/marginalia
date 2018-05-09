import React from 'react';
import AddParagraph from './AddParagraph';
import ParagraphList from './ParagraphList';
import { startAddParagraph } from '../actions/paragraphs';

import { connect } from 'react-redux';

export class ViewParagraphs extends React.Component{

  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }


  render(){

        return(
          <div>
          Paragraph list

          <AddParagraph history={this.props.history}
          title={this.state.title}
          author_last_name={this.state.author_last_name}
          author_first_name={this.state.author_first_name}

          />
          <ParagraphList history={this.props.history} />
           </div>

      )
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddPargraph: (paragraph)=> dispatch(startAddPargraph(paragraph)),

})


export default connect(undefined, mapDispatchToProps)(ViewParagraphs)
