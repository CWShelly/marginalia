import React from 'react';

import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){
console.log(this.props);
    return(
      <div>


      <li>
      <p>{this.props.note}</p>
        <p className="list-paragraph-item-reference-paragraph">Paragraph: {this.props.paragraph_number}      <Link     to={`/editParagraph/${this.props.id}`}>
      <span className="list-paragraph-item-reference" >Edit<i className="fa fa-wrench"></i></span>
                </Link></p>

      </li>

      </div>

    )
  }
}


export default ParagraphListItem;
