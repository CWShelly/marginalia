
import database from '../firebase/firebase'


export const addEntry = (entry)=>({
  type: 'ADD_ENTRY',
  entry
})

export const startAddEntry = (entryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
  const {

    chapter_number = 0,
    book_id=localStorage.getItem('book_id'),
    createdAt = 0

  } = entryData;

  const entry = { chapter_number, book_id , createdAt}

  database.ref(`users/${uid}/entries`).push(chapter)
  .then((ref) => {

    // localStorage.setItem('chapter_id', ref.key);
    // localStorage.setItem('chapter_number', chapter.chapter_number);
    dispatch(addEntry({
      id: ref.key,
      ... entry
    })

  )

  // localStorage.setItem('chapter_id', ref.key);
  // localStorage.setItem('chapter_number', chapter.chapter_number)
  })

  }

}

export const startRemoveEntry =({ id} = {})=>{

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/entries/${ id }`).remove()
    .then(() => {
      dispatch(removeEntry({ id }))
    })
  }


}

export const removeEntry= ({ id } = {}) =>({
  type: 'REMOVE_ENTRY',
  id
})

export const editChapter = (id, updates)=>({
  type:'EDIT_CHAPTER',
  id,
  updates
})
export const startEditEntry= (id, updates) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/entries/${id}`).update(updates)
   .then(() => {
     dispatch(editEntry(id, updates))
   })
  }

}
export const setEntries= (entries) => ({
  type: 'SET_ENTRIES',
  entries
})

export const startSetEntries = () => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/entries`)
   .once('value')
   .then((snapshot) => {

     const entries = [];

     snapshot.forEach((childSnapshot) => {

       entries.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setEntries(entries))
   })

 }

}
