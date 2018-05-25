
import database from '../firebase/firebase'

export const findTag=(note)=>{
  console.log('finding tag: actions');
return(dispatch, getState)=>{

  // console.log(database.ref(`users/${uid}/notes`));
console.log(database);

  const uid = getState().auth.uid;
  const notesRef =  database.ref(`users/${uid}/notes`)
  .orderByChild('page_number').equalTo(194)
.on('value', (snapshot)=>{
  // console.log(snapshot.val());
snapshot.forEach((snapshot)=>{
  console.log( snapshot.val().tags);
})
})



    //
    // .get()
    // .then((snapshot)=>{
    //   snapshot.forEach((childSnapshot)=>{
    //     console.log(childSnapshot.val());
    //   })
    // })

    // database.ref(`users/${uid}/notes`)
    // .equalTo('tags.Obama', '==',true)
    // .get()
    // .then((snapshot)=>{
    //
    //  snapshot.forEach((childSnapshot)=>{
    //    console.log(childSnapshot.val());
    //  })
    // })
}
}


export const addNote = (note)=>({
  type: 'ADD_NOTE',
  note
})


export const startAddNote = (noteData = {}) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
  const {

    chapter_number= 0,
    page_number = 0,
    paragraph_number=0,
    note= '',
    title='',
    createdAt = 0,
    book_id = '',
    tags = {}
  } = noteData;



  const _note = { chapter_number, page_number,
    paragraph_number, note, title,  createdAt, book_id, tags}


  database.ref(`users/${uid}/notes`).push(_note)
  .then((ref) => {
    dispatch(addNote({
      id: ref.key,
      ... _note
    }));
  })
  }
}


export const startRemoveNote =({ id} = {})=>{

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/notes/${ id }`).remove()
    .then(() => {
      dispatch(removeNote({ id }))
    })

  }
}

export const removeNote = ({ id } = {}) =>({
  type: 'REMOVE_NOTE',
  id
})



export const startEditNote = (id, updates)=>{
  return(dispatch, getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/notes/${id}`).update(updates)
    .then(()=>{
      dispatch(editNote(id, updates))
    })
  }
}


export const editNote = (id, updates)=>({
  type:'EDIT_NOTE',
  id,
  updates
})


export const setNotes = (notes) => {
  console.log('setting the notes from explicit');
  return{
    type: 'SET_NOTES',
    notes

  }
}

export const startSetNotes = () => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes`)
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
