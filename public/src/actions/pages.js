// import uuid from 'uuid';
import database from '../firebase/firebase'
// import { startRemoveNotesAssociatedWithBook } from './notes'

export const addPage = (page)=>({
  type: 'ADD_PAGE',
  page
})

export const startAddPage = (pageData = {}) => {
  return (dispatch) => {
  const {

   page_number = 0,
   book_id = localStorage.getItem('book_id'),
   chapter_id=localStorage.getItem('chapter_id'),
    createdAt = 0

  } = pageData;

  const page = { page_number, book_id, chapter_id, createdAt}

  database.ref('pages').push(page)
  .then((ref) => {
    console.log(ref.key);
    localStorage.setItem('page_id', ref.key);
    localStorage.setItem('page_number', page.page_number)

    dispatch(addPage({
      id: ref.key,
      ... page
    }));
  })
  }

}


export const startRemovePage =({ id} = {})=>{

  return (dispatch)=>{
    database.ref(`pages/${ id }`).remove()
    .then(() => {
      dispatch(removePage({ id }))
    })
  }


}

export const removePage= ({ id } = {}) =>({
  type: 'REMOVE_PAGE',
  id
})

export const editPage = (id, updates)=>({
  type:'EDIT_PAGE',
  id,
  updates
})



export const startEditPage= (id, updates) => {

  return (dispatch) => {
    return database.ref(`pages/${id}`).update(updates)
   .then(() => {
     dispatch(editPage(id, updates))
   })
  }

}

export const setPages = (pages) => ({
  type: 'SET_PAGES',
  pages
})

export const startSetPages = () => {

 return (dispatch) => {
   return database.ref('pages')
   .once('value')
   .then((snapshot) => {
     const pages = [];

     snapshot.forEach((childSnapshot) => {

       pages.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setPages(pages))
   })

 }

}
