import uuid from 'uuid';
import database from '../firebase/firebase'


export const addNote = (note)=>({
  type: 'ADD_NOTE',
  note
})


export const startAddNote = (noteData = {}) => {
  return (dispatch) => {
  const {

    chapter_number= 0,
    page_number = 0,
    paragraph_number=0,
    note= '',
    createdAt = 0,
    book_id = localStorage.getItem('book_id'),


  } = noteData;
  const _note = { chapter_number, page_number, paragraph_number, note, createdAt, book_id}
  return database.ref('notes').push(_note)
  .then((ref) => {
    dispatch(addNote({
      id: ref.key,
      ... _note
    }));
  })
  }
}


export const startRemoveNote =({ id} = {})=>{
  console.log('removing note');
  return(dispatch)=>{
    database.ref(`notes/${ id }`).remove()
    .then(() => {
      dispatch(removeNote({ id }))
    })

  }
}

export const startRemoveNotesAssociatedWithBook =({ id} = {})=>{
  console.log('removing the notes associated with this book');
  // return(dispatch)=>{
  //   database.ref(`notes/${ id }`).remove()
  //   .then(() => {
  //     dispatch(removeBook({ id }))
  //   })
  //
  // }
}


export const removeNote = ({ id } = {}) =>({
  type: 'REMOVE_NOTE',
  id
})

export const editNote = (id, updates)=>({
  type:'EDIT_NOTE',
  id,
  updates
})



// export const setNotes = (notes) => ({
//   type: 'SET_NOTES',
//   notes
// })




export const setNotes = (notes) => {
  console.log('setting the notes from explicit');
  return{   type: 'SET_NOTES',
    notes

  }
}

export const startSetNotes = () => {
  console.log('starting set notes');
 return (dispatch) => {
   return database.ref('notes')
   .once('value')
   .then((snapshot) => {

     const notes = [];

     snapshot.forEach((childSnapshot) => {
       notes.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setNotes(notes))
   })

 }

}
