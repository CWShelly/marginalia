import React from 'react';
import moment from 'moment';
import { storage } from '../firebase/firebase';


export default class ProfileForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      user_name: props.profile ? props.profile.user_name : '',
      user_bio:props.profile ? props.profile.user_bio : '',
      user_location:  props.profile ? props.profile.user_location : '',
      createdAt: props.book ? moment(props.book.createdAt): moment(),
      error: '',
      profile_image: '',
      input: '',
      interestsArr: props.profile ? Object.keys(props.profile.interests) : [],
      interests: props.profile ? props.profile.interests : {},
      progress: 0,
      file: ''

    }
  }



  hasSet=(x)=>{
    return new Promise((resolve,reject)=>{
      let arr = this.state.interestsArr.reduce((collection, item)=>{
        collection[item]=true
        return collection
      },{});
     this.setState((prevState)=>({
       interests: arr
     }))
     console.log(arr);
     console.log(this.state.interests);
     resolve(x)
     reject('failure')

    })
  }

setPic =(e,x)=>{
  return new Promise((resolve, reject)=>{
    let file = e.target.files[0];
    console.log(e.target.files[0]);
    this.setState(()=>({
          file: e.target.files[0]
    }))

      resolve(x);
      reject('fail')
    })

}


  sendToStorage = (e)=>{
    e.persist()

    let a = this.setPic(e)

    a.then(()=>{
      console.log(this.state.file);
    })
    .then(()=>{
      let file = this.state.file;
      console.log(file);
      let storageRef = storage.ref('images/' + this.state.file.name)
      let task = storageRef.put(file);

      task.then((snapshot)=>{
          let percentage = (snapshot.bytesTransferred /
          snapshot.totalBytes) * 100;
          console.log(percentage);
          this.setState(()=>({progress: percentage}))
      })

      .then(()=>{

          let storageChild = `images/${this.state.file.name}`;
          let storageRef = storage.ref()
          let tangRef = storageRef.child(storageChild);

          tangRef.getDownloadURL().then((url)=>{
            console.log(url);
            this.setState(()=>({
              profile_image:url
            }))
          })
          .then(()=>{
            console.log(this.state);
          })
      })

    })
  }

  // inputChange = (e)=>{
  //
  //   let file = e.target.files[0];
  //
  //   const a = this.sendToStorage(e);
  //
  //
  //
  // }

  onUserNameChange = (e) =>{
   const user_name = e.target.value;
   this.setState(()=>({ user_name}));
  }

  onUserBioChange = (e) =>{
    const user_bio = e.target.value;
    this.setState(()=>({ user_bio }));

  }

  onUserLocationChange = (e) =>{
    const user_location = e.target.value;
    this.setState(()=>({ user_location }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();
    const a = this.hasSet();

    a.then(()=>{
console.log(this.state.interests);
      if(!this.state.interests )
      {
          this.setState(()=>({error:'Please enter some interests.'}))
      } else{
        this.setState(()=>({error: ''}));
        if(!this.state.error){
        // this.state.interests = {}
        }
      }

    })

    .then(()=>{

      if( !this.state.user_name || !this.state.user_bio || !this.state.user_location){
        this.setState(()=>({error: 'Please choose a unique user name and stuff'}));
      } else{
        this.setState(()=>({error: ''}));
        console.log(this.state);
        this.props.onSubmit({

          user_name: this.state.user_name,
          user_bio: this.state.user_bio,
          user_location: this.state.user_location,
          createdAt: this.state.createdAt.valueOf(),
          profile_image: this.state.profile_image,
          interests: this.state.interests,


        })

        if(!this.state.error){
          this.state.user_name = "";
          this.state.user_bio = "";
          this.state.user_location= "";
        }
      }
    })



  }


  handleInterestInputChange=(e)=>{

    e.persist();
    // console.log(e.target.value);
    this.setState(()=>({ input:e.target.value }))
  }

  handleInputKeyDown=(e)=>{

    if(e.keyCode === 13){
      const value = e.target.value.trim();
      this.setState(()=>({
      interestsArr: [...this.state.interestsArr, value],
      input: ''}))
    }


    if(this.state.interestsArr.length && e.keyCode === 8 && !this.state.input.length){
      this.setState(()=>({
        tagArr: this.state.interestsArr.slice(0, this.state.interestsArr.length -1)
      }))
    }
  }


  handleRemoveItem=(itemToRemove, key)=>{
    console.log('removing');
   this.setState((prevState)=>{
     return{
       interestsArr:this.state.interestsArr.filter((x)=>{
         return x !== itemToRemove;
       })
     }
  })
  }

  render(){


    return(
      <div className="container-book-form">

      <div>
            <ul className="tag-list">
            {this.state.interestsArr.map((item, x)=>{
              return <li className="tag-list"  key={x}
            >
              <span><button className="add-tag">{item}</button>
              <button  className="form-button-check"   onClick={(e)=>{
                this.handleRemoveItem(item, x)
              }}>x</button></span>
              </li>
            })}
            <p>
            <label>add interests:</label><input
            value={this.state.input}
            onChange={this.handleInterestInputChange}
            onKeyDown={this.handleInputKeyDown} />
            </p>
            </ul>


      </div>

       <span></span>


 <progress value={this.state.progress} max="100" name="progressBar"></progress>
      <input type="file"
      id="fileButton" onChange={this.sendToStorage}/>

      {this.state.error && <p className="form-error" >{this.state.error}</p>}
      <form   onSubmit={this.onSubmit}>

      <input className="book-input"
      type="text"
      placeholder="User Name"
      value={this.state.user_name}
      onChange={this.onUserNameChange}
      />


      <input  className="book-input"

      type="text"
      placeholder="Bio"
      value={this.state.user_bio}
      onChange={this.onUserBioChange}
      />

      <input  className="book-input"
      type="text"
      placeholder="Location"
      value={this.state.user_location}
      onChange={this.onUserLocationChange}
      />


      <button className="form-button-book">  Create Profile</button>

      </form>

      </div>
    )
  }

}
