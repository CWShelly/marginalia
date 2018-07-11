import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';


class BookListItem extends React.Component{

  onHandleClick=()=>{

    localStorage.setItem('book_id', this.props.id)
    localStorage.setItem('author_first', this.props.author_first_name);
    localStorage.setItem('author_last', this.props.author_last_name);
    localStorage.setItem('title', this.props.title);
    localStorage.setItem('browse_id', this.props.owner_id)
  }

  render(){
    // console.log('HEYYYY');
    // console.log(this.props);
    return(
      <div className="row">
          <div className="col-md-4 col-sm-12">

              <Link className="mb-4 link"
              to={`/viewNotes/${this.props.title}`} onClick={this.onHandleClick}
              >
              {this.props.title} by {this.props.author_first_name} {this.props.author_last_name}
              </Link>
              <div  >
                 {localStorage.getItem('auth_id') === localStorage.getItem('browse_id')
                 && !this.props.history &&
                  <Link className="link" to={`/edit/${this.props.id}`}>
                   <span >Edit{' '}</span><i className="fa fa-wrench link "></i>
                 </Link>
               }
              </div>

         </div>


         <div className="col-md-4 col-sm-12">

            <Link to={`/viewSummaries/${this.props.title}`}
            >Chapter Summaries</Link>
          </div>


         <div className="col-md-4 col-sm-12">

           {this.props.tags &&
           <ul><strong> topics:</strong> {' '}
             {Object.keys(this.props.tags).map((item)=>{
              return  <a
              key={uuidv4()}>{item + '  '}</a>
            })}
           </ul>
                 }
         </div>

      </div>

    )
  }
}


export default BookListItem;
