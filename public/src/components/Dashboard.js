import React from 'react';
import AddBook from './AddBook'
import BookList from './BookList';


class Dashboard extends React.Component{


  render(){
console.log(this.props);
    return(
      <div className="container" >
          <div  >

            <AddBook  history={this.props.history} />

        </div>

    <div  >

    <div  >
      <BookList   />
    </div>

    </div>

      </div>
    )
  }
}






export default Dashboard;
