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
 return (dispatch, getState) => {
   const uid = getState().auth.uid
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
    dispatch(setSummaries(summaries))
   })

 }

}
