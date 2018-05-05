import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';


class Dashboard extends React.Component{


  render(){

    return(
      <div>
      <div className="container">

        <AddBook   history={this.props.history}/>
        <BookList history={this.props.history} />
    </div>
      </div>
    )
  }
}






export default Dashboard;
