import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { startAddTag} from '../actions/tags';
import AddTag from './AddTag';

export class ParagraphListItem extends React.Component{

  constructor(props){
    super(props);
      this.state={
       display:false
      }
  }
  changeDisplay=()=>{
    localStorage.setItem('paragraph_id', this.props.id)
     console.log(this.state.display);
     this.setState((prevState)=>({display: !prevState.display}))
     console.log(this.state.display);
   }


  render(){
    console.log(this.props);


    return(
      <div>
      <li>
      <p>{this.props.note}</p>
        <div className="list-paragraph-item-reference-paragraph">Paragraph: {this.props.paragraph_number}
           <Link to={`/editParagraph/${this.props.id}`}>
        <span className="list-paragraph-item-reference" >Edit<i className="fa fa-wrench"></i></span>
          </Link>
          <div>
          <button className="display-tag-button" onClick={this.changeDisplay}>{this.state.display ? 'Cancel' : 'Add Tags'}</button>
          {this.state.display && <AddTag />}</div>
          </div>

      </li>

      </div>

    )
  }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddPargraph: (paragraph)=> dispatch(startAddPargraph(paragraph)),
     startAddPage: (page)=> dispatch(startAddPage(page)),


})

export default connect(undefined, mapDispatchToProps)(ParagraphListItem)
