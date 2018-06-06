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
    profile_image: ''
  }
}


inputChange = (e)=>{
  let file = e.target.files[0];

  let storageRef = storage.ref('images/' + file.name)
  storageRef.put(file)
  let imageRef = storageRef.child('images/' + file.name)

  this.setState(()=>({
    profile_image:imageRef
  }))
}

componentDidUpdate(){

  console.log('updated');
  console.log(this.state);
}

componentDidMount(){
let storageRef = storage.ref()
let tangRef = storageRef.child('images/schlesinger.jpg');
tangRef.getDownloadURL().then((url)=>{
  this.setState(()=>({
    profile_image:url
  }))
})
}
  render(){
    return(
      <div className="container" >

           <Profile history={this.props.history} />
       <input type="file"
       id="fileButton" onChange={this.inputChange}/>

<img src={this.state.profile_image} height="42" width="42" />
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
