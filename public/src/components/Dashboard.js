import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';


class Dashboard extends React.Component{


  render(){

    return(
      <div className="container" >
          <div  >

            <AddBook  history={this.props.history}/>

        </div>

    <div  >

    <div  >
      <BookList history={this.props.history} />
    </div>

    </div>

      </div>
    )
  }
}






export default Dashboard;
