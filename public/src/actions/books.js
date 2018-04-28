import uuid from 'uuid';

export const addBook = (
  {
    author_last_name = '',
    author_first_name = '',
    title = '',
    createdAt = 0

  }={}
)=>({
  type: 'ADD_BOOK',
    book:{
      id: uuid(),
      author_last_name,
      author_first_name,
      title,
      createdAt
    }
})

export const removeBook = ({ id } = {}) =>({
  type: 'REMOVE_BOOK',
  id
})

export const editBook = (id, updates)=>({
  type:'EDIT_BOOK',
  id,
  updates
})
