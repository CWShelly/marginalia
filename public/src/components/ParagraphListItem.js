import React from 'react';

import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){

    return(
      <div>


      <li>
      <p>{this.props.note}</p>
        <p className="list-paragraph-item-reference">Paragraph: {this.props.paragraph_number}      <Link to={`/editParagraph/${this.props.id}`}>
              <span>Edit</span>
                </Link></p>

      </li>

      </div>

    )
  }
}


export default ParagraphListItem;
