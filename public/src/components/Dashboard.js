import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';
import NoteList from './NoteList';
import ListFilters from './ListFilters'
import  Profile  from '../components/Profile';
import { Link } from 'react-router-dom';
import { storage } from '../firebase/firebase';


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


  render(){

    return(
      <div className="container-fluid dashboard-container mt-0">
          <div className="row d-flex justify-content-center">
            <Profile history={this.props.history} />
          </div>


    <div className="row mt-4 mb-4" style={{background:"rgb(102, 102, 153)"}}>
        <div className="col-sm-12">
           <button  className="btn btn-primary dash-btn" onClick={this.onClick}>
           Add a book</button>

           {this.state.display &&
             <div className="row">
               <div className="col-sm-12">
                <AddBook  history={this.props.history} />
               </div>

             </div>
           }
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
