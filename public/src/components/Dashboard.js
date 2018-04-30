import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';


class Dashboard extends React.Component{


  render(){
    console.log(this.props);
 

    return(
      <div>
        The Dashboard
          <AddBook   history={this.props.history}/>
        <BookList />

      </div>
    )
  }
}






export default Dashboard;
