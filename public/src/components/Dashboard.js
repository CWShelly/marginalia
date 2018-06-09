import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';
import NoteList from './NoteList';
import ListFilters from './ListFilters'
import   Profile  from '../components/Profile';
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
      <div className="container" >

           <Profile history={this.props.history} />

     <button onClick={this.onClick}> Add a book</button>
        {this.state.display &&   <div>
            <AddBook  history={this.props.history} />
        </div>}

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
