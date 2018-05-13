// import uuid from 'uuid';
import database from '../firebase/firebase'
// import { startRemoveNotesAssociatedWithBook } from './notes'

export const addChapter = (chapter)=>({
  type: 'ADD_CHAPTER',
  chapter
})

export const startAddChapter = (chapterData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
  const {

    chapter_number = 0,
    book_id=localStorage.getItem('book_id'),
    createdAt = 0

  } = chapterData;

  const chapter = { chapter_number, book_id , createdAt}

  database.ref(`users/${uid}/chapters`).push(chapter)
  .then((ref) => {

    localStorage.setItem('chapter_id', ref.key);
    localStorage.setItem('chapter_number', chapter.chapter_number);
    dispatch(addChapter({
      id: ref.key,
      ... chapter
    })

  )

  localStorage.setItem('chapter_id', ref.key);
  localStorage.setItem('chapter_number', chapter.chapter_number)
  })

  }

}

export const startRemoveChapter =({ id} = {})=>{

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/chapters/${ id }`).remove()
    .then(() => {
      dispatch(removeChapter({ id }))
    })
  }


}

export const removeChapter= ({ id } = {}) =>({
  type: 'REMOVE_CHAPTER',
  id
})

export const editChapter = (id, updates)=>({
  type:'EDIT_CHAPTER',
  id,
  updates
})
export const startEditChapter= (id, updates) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/chapters/${id}`).update(updates)
   .then(() => {
     dispatch(editChapter(id, updates))
   })
  }

}
export const setChapters = (chapters) => ({
  type: 'SET_CHAPTERS',
  chapters
})

export const startSetChapters = () => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/chapters`)
   .once('value')
   .then((snapshot) => {

     const chapters = [];

     snapshot.forEach((childSnapshot) => {

       chapters.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setChapters(chapters))
   })

 }

}
