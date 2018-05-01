import uuid from 'uuid';

export const addNote = (
  {
    chapter_number = 0,
    page_number = 0,
    paragraph_number = 0,
    note = '',
    createdAt = 0,
    book_id = ''

  }={}
)=>({
  type: 'ADD_NOTE',
  note:{
      id: uuid(),
      chapter_number: parseInt(chapter_number),
      page_number: parseInt(page_number),
      paragraph_number:parseInt(paragraph_number),
      note,
      createdAt,
      book_id: localStorage.getItem('book_id')
    }
})

export const removeNote = ({ id } = {}) =>({
  type: 'REMOVE_NOTE',
  id
})

export const editNote = (id, updates)=>({
  type:'EDIT_NOTE',
  id,
  updates
})
