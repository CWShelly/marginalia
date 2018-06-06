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

}








componentDidMount(){
  // console.log(this.props);
// let storageRef = storage.ref()
// let tangRef = storageRef.child('images/schlesinger.jpg');
// tangRef.getDownloadURL().then((url)=>{
//   this.setState(()=>({
//     profile_image:url
//   }))
// })
}
  render(){
    return(
      <div className="container" >

           <Profile history={this.props.history} />

          <div>
            <AddBook  history={this.props.history} />
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
