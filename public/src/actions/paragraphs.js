// import uuid from 'uuid';
import database from '../firebase/firebase'
 

export const addParagraph = (paragraph)=>({
  type: 'ADD_PARAGRAPH',
  paragraph
})

export const startAddParagraph = (paragraphData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
  const {

  page_id = localStorage.getItem('page_id'),
    book_id=localStorage.getItem('book_id'),
  paragraph_number = 0,
  note = '',
    createdAt = 0

  } = paragraphData;

  const paragraph = { page_id, book_id, paragraph_number, note, createdAt}

  database.ref(`users/${uid}/paragraphs`).push(paragraph)
  .then((ref) => {

    dispatch(addParagraph({
      id: ref.key,
      ... paragraph
    }));
  })
  }

}


export const startRemoveParagraph =({ id} = {})=>{

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/paragraphs/${ id }`).remove()
    .then(() => {
      dispatch(removeParagraph({ id }))
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


export const startEditParagraph= (id, updates) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/paragraphs/${id}`).update(updates)
   .then(() => {
     dispatch(editParagraph(id, updates))
   })
  }



}
export const setParagraphs = (paragraphs) => ({
  type: 'SET_PARAGRAPHS',
  paragraphs
})

export const startSetParagraphs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
   return database.ref(`users/${uid}/paragraphs`)
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
