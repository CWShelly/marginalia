// import uuid from 'uuid';
import database from '../firebase/firebase'
// import { startRemoveNotesAssociatedWithBook } from './notes'

export const addPage = (page)=>({
  type: 'ADD_PAGE',
  page
})

export const startAddPage = (pageData = {}) => {
  console.log(pageData);
  return (dispatch, getState) => {


    const uid = getState().auth.uid;
  const {

   page_number = 0,
   book_id = localStorage.getItem('book_id'),
   chapter_id=localStorage.getItem('chapter_id'),
    createdAt = 0

  } = pageData;

  const page = { page_number, book_id, chapter_id, createdAt}

  database.ref(`users/${uid}/pages`).push(page)
  .then((ref) => {


    localStorage.setItem('page_id', ref.key);
    console.log('set');
   
    localStorage.setItem('page_number', page.page_number)

    dispatch(addPage({
      id: ref.key,
      ... page
    }));
  })
  }

}


export const startRemovePage =({ id} = {})=>{

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/pages/${ id }`).remove()
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

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/pages/${id}`).update(updates)
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

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/pages`)
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

export const testPages =()=>{
  console.log('test page');
  return 'yess'
}
