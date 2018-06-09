
 import React from 'react';
 import { connect } from 'react-redux';
 import ProfileForm from './ProfileForm';
 import { startEditProfile } from '../actions/profiles';
 // import { startRemoveNote} from '../actions/notes'
 // import { startRemoveParagraph } from '../actions/paragraphs';
 // import { startRemoveChapter } from '../actions/chapters'

 // import filterThis from "../selectors/genericSelector";
 // import filterSubLevel from "../selectors/genericIdFinder";



 export class EditProfile extends React.Component{
   constructor(props){
     super(props);
     this.state={
       buttonText: 'Edit Profile'

     }
   }

   onSubmit=(profile)=>{
     console.log(profile);
     console.log('this profile!');
  // console.log(book);
   this.props.startEditProfile(this.props.profile.id, profile);
   this.props.history.push('/');
}




  render(){


    return (
      <div>

      {this.props.profile.profile_image &&
         <img className="profile-image" src={this.props.profile.profile_image}  />}
       <ProfileForm
       profile={this.props.profile}

       buttonText={this.state.buttonText}

       onSubmit={
        this.onSubmit}
       />


      </div>
    )
  }
 }


 const mapStateToProps = (state, props)=>{
console.log(state);
  return {
    profile: state.profiles[0],
    books: state.books.filter((book)=> book.id !== book),
    // filteredChapters: filterThis(state.chapters, 'book_id'),
    // filteredPages:filterThis(state.pages, 'book_id'),
    // filteredParagraphs: filterThis(state.paragraphs, 'book_id'),
    // relatedNotes: filterThis(state.notes, 'book_id')



  }
}

const mapDispatchToProps = (dispatch, props) => {

  return{
    startEditProfile:(id, profile)=> dispatch(startEditProfile(id, profile)),


  }

}




 export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
