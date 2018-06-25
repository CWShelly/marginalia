import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';
import NoteList from './NoteList';
import ListFilters from './ListFilters'
import   Profile  from '../components/Profile';
import { Link } from 'react-router-dom';
import { storage } from '../firebase/firebase';
import { Button } from 'reactstrap';

class Dashboard extends React.Component{
constructor(props){
  super(props);
  this.state={
    display: false
  }

}


onClick = ()=>{
  this.setState((prevState)=>({
    display:!prevState.display
  }))
}

  // <Button className="btn-danger">Test Button Bootstrap</Button>
  render(){

    return(
      <div className="container-fluid" >

           <Profile history={this.props.history} />

    <div className="row mt-4 mb-4 bg-primary">
        <div className="col">

           <button  className="btn btn-primary" onClick={this.onClick}> Add a book</button>

               {this.state.display &&
                 <div>
                  <AddBook  history={this.props.history} />
                 </div>}
        </div>

            <div className="col">
               <Link  className="btn btn-primary" to="/viewAllNotes" role="button">View Your Notes</Link>
            </div>
      </div>
           <div>
              <div>
                <BookList />
              </div>
           </div>
      </div>
    )
  }
}






export default Dashboard;
