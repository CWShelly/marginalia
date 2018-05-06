import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';


class Dashboard extends React.Component{


  render(){

    return(
      <div className="container">
          <div className="container-dashboard-add-book">

            <AddBook   history={this.props.history}/>

        </div>
    <div className="container-dashboard-book-list">
    <div className="container-dashboard-book-list-inner">
      <BookList history={this.props.history} />
    </div>
    </div>
      </div>
    )
  }
}






export default Dashboard;
