
export default (notes) =>{
 
   const book_id_to_remove = localStorage.getItem('book_id');

    const hasBookId= (note)=>{
      return note.book_id === book_id_to_remove;
    }

   const notes_of_this_book = notes.filter(hasBookId)

    const ids_of_this_book = notes_of_this_book.map(x => x.id)

  return ids_of_this_book

}
