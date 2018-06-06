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

sendToStorage = (e, x)=>{
  console.log(e, x);
  return new Promise((resolve, reject)=>{
    let file = e.target.files[0];
    let storageRef = storage.ref('images/' + file.name)
    storageRef.put(file);

    resolve(x);
    reject('fail')
  })
}



inputChange = (e)=>{

  let file = e.target.files[0];
  const a = this.sendToStorage(e);
  a.then(()=>{

     let storageChild = `images/${file.name}`;
     let storageRef = storage.ref()
     let tangRef = storageRef.child(storageChild);
     tangRef.getDownloadURL().then((url)=>{
       this.setState(()=>({
         profile_image:url
       }))
     })
  })

}

componentDidUpdate(){
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
