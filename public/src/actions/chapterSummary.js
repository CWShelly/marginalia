import database from '../firebase/firebase'


export const addChapterSummary = (chapterSummary)=>({
  type: 'ADD_SUMMARY',
  chapterSummary
})

export const startAddChapterSummary = (summaryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

  const {

    title = '',
    chapter_number='',
    book_id='',
    summary='',
    createdAt = 0

  } = summaryData;
  const _summary = {chapter_number, book_id, summary, title, createdAt}

  database.ref(`users/${uid}/summaries`).push(_summary)
  .then((ref) => {
    dispatch(addChapterSummary({
      id: ref.key,
      ... _summary
    }));
  })
  }

}


export const startRemoveChapterSummary =({ id} = {})=>{
  const book_id = id;

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/summaries/${ id }`).remove()
    .then(() => {
      dispatch(removeChapterSummary({ id }))
    })
  }
}

export const removeChapterSummary = ({ id } = {}) =>({
  type: 'REMOVE_SUMMARY',
  id
})

export const editChapterSummary = (id, updates)=>({
  type:'EDIT_SUMMARY',
  id,
  updates
})

export const startEditChapterSummary = (id, updates) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/summaries/${id}`).update(updates)
   .then(() => {
     dispatch(editChapterSummary(id, updates))
   })
  }

}
export const setSummaries = (summaries) => ({
  type: 'SET_SUMMARIES',
  summaries
})

export const startSetSummaries = () => {
  console.log('getting summaries');


 return (dispatch, getState) => {

   let auth_id = getState().auth.uid
   const browse_id = localStorage.getItem('browse_id') || auth_id;

   console.log('browse_id === auth_id? ', browse_id === auth_id);

   let uid = browse_id;
   // const uid = getState().auth.uid
   return database.ref(`users/${uid}/summaries`)
   .once('value')
   .then((snapshot) => {

     const summaries = [];

     snapshot.forEach((childSnapshot) => {
       summaries.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
     console.log(summaries);
    dispatch(setSummaries(summaries))
   })

 }

}
