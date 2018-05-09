// import uuid from 'uuid';
import database from '../firebase/firebase'
// import { startRemoveNotesAssociatedWithBook } from './notes'

export const addParagraph = (paragraph)=>({
  type: 'ADD_PARAGRAPH',
  paragraph
})

export const startAddParagraph = (paragraphData = {}) => {
  return (dispatch) => {
  const {

  page_id = localStorage.getItem('page_id'),
  paragraph_number = 0,
  note = '',
    createdAt = 0

  } = paragraphData;

  const paragraph = { page_id, paragraph_number, note, createdAt}

  database.ref('paragraphs').push(paragraph)
  .then((ref) => {
    dispatch(addParagraph({
      id: ref.key,
      ... paragraph
    }));
  })
  }

}


export const startRemoveParagraph =({ id} = {})=>{

  return (dispatch)=>{
    database.ref(`paragraphs/${ id }`).remove()
    .then(() => {
      dispatch(removeParagraphs({ id }))
    })
  }


}

export const removeParagraph= ({ id } = {}) =>({
  type: 'REMOVE_PARAGRAPH',
  id
})

export const editParagraph = (id, updates)=>({
  type:'EDIT_PARAGRAPH',
  id,
  updates
})

export const setParagraphs = (paragraphs) => ({
  type: 'SET_PARAGRAPHS',
  paragraphs
})

export const startSetParagraphs = () => {
 return (dispatch) => {
   return database.ref('paragraphs')
   .once('value')
   .then((snapshot) => {
     const paragraphs = [];

     snapshot.forEach((childSnapshot) => {
   
       paragraphs.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setParagraphs(paragraphs))
   })

 }

}
