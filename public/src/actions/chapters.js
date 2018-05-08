// import uuid from 'uuid';
import database from '../firebase/firebase'
// import { startRemoveNotesAssociatedWithBook } from './notes'

export const addChapter = (chapter)=>({
  type: 'ADD_CHAPTER',
  chapter
})

export const startAddChapter = (chapterData = {}) => {

  return (dispatch) => {
  const {

    chapter_number = 0,
    book_id=localStorage.getItem('book_id'),
    createdAt = 0

  } = chapterData;

  const chapter = { chapter_number, book_id , createdAt}

  database.ref('chapters').push(chapter)
  .then((ref) => {
    dispatch(addChapter({
      id: ref.key,
      ... chapter
    }));
  })
  }

}


export const startRemoveChapter =({ id} = {})=>{

  return (dispatch)=>{
    database.ref(`chapters/${ id }`).remove()
    .then(() => {
      dispatch(removeChapters({ id }))
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

export const setChapters = (chapters) => ({
  type: 'SET_CHAPTERS',
  chapters
})

export const startSetChapters = () => {

 return (dispatch) => {
   return database.ref('chapters')
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
