import uuid from 'uuid';
import database from '../firebase/firebase'

export const addBook = (book)=>({
  type: 'ADD_BOOK',
  book
})

export const startAddBook = (bookData = {}) => {
  return (dispatch) => {
  const {
    author_last_name = '',
    author_first_name = '',
    title = '',
    createdAt = 0

  } = bookData;
  const book = { author_last_name, author_first_name, title, createdAt}
  database.ref('books').push(book)
  .then((ref) => {
    dispatch(addBook({
      id: ref.key,
      ... book
    }));

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

export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books
})

export const startSetBooks = () => {
 return (dispatch) => {
   return database.ref('books')
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
