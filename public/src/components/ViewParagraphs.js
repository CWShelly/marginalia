import React from 'react';
import AddParagraph from './AddParagraph';
import ParagraphList from './ParagraphList';
import { startAddParagraph } from '../actions/paragraphs';

import { connect } from 'react-redux';


export class ViewParagraphs extends React.Component{


render(){
console.log(this.props);
  return(
    <div>
    Paragraph list

    <AddParagraph history={this.props.history} />
    <ParagraphList history={this.props.history} />
     </div>

  )
}
}



const mapDispatchToProps = (dispatch)=> ({
     startAddPargraph: (paragraph)=> dispatch(startAddPargraph(paragraph)),

})


export default connect(undefined, mapDispatchToProps)(ViewParagraphs)
