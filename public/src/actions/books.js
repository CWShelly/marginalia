import database from '../firebase/firebase'


export const addBook = (book)=>({
  type: 'ADD_BOOK',
  book
})

export const startAddBook = (bookData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

  const {
    author_last_name = '',
    author_first_name = '',
    title = '',
    createdAt = 0,
    show_book= true,
        tags = {},
        owner_id

  } = bookData;
  const book = {owner_id, tags, author_last_name,
    author_first_name, title, createdAt, show_book}
  console.log(book);

  database.ref(`users/${uid}/books`).push(book)
  .then((ref) => {
    dispatch(addBook({
      id: ref.key,
      ... book
    }));
  })
  }

}


export const startRemoveBook =({ id} = {})=>{
  const book_id = id;

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/books/${ id }`).remove()
    .then(() => {
      dispatch(removeBook({ id }))
    })
  }
}

export const removeBook = ({ id } = {}) =>({
  type: 'REMOVE_BOOK',
  id
})

export const editBook = (id, updates)=>({
  type:'EDIT_BOOK',
  id,
  updates
})

export const startEditBook = (id, updates) => {
console.log(updates);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/books/${id}`).update(updates)
   .then(() => {
     dispatch(editBook(id, updates))
   })
  }

}
export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books
})

export const startSetBooks = () => {

 return (dispatch, getState) => {
     console.log('setting books');
   let auth_id = getState().auth.uid
   const browse_id = localStorage.getItem('browse_id') || auth_id;

   console.log('browse_id === auth_id? ', browse_id === auth_id);

   let uid = browse_id;

   return database.ref(`users/${uid}/books`)
   .once('value')
   .then((snapshot) => {
     const books = [];

     snapshot.forEach((childSnapshot) => {
       books.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(setBooks(books))
   })

 }

}
