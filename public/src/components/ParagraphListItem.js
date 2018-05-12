import React from 'react';

import { Link } from 'react-router-dom';

class ParagraphListItem extends React.Component{


  render(){
 
    return(
      <div>

      <Link to={`/editParagraph/${this.props.id}`}>
          <p>Edit</p>
            </Link>
      <li>
      <p>{this.props.note}</p>
        <p className="list-paragraph-item-reference">Paragraph: {this.props.paragraph_number} </p>
      </li>

      </div>

    )
  }
}


export default ParagraphListItem;
