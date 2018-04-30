
export default (notes) =>{
console.log(notes);
  if(notes){
    const book_id = localStorage.getItem('book_id');

    const hasBookId= (note)=>{
      return note.book_id === book_id;
    }

   const notes_of_this_book = notes.filter(hasBookId)
   console.log(notes_of_this_book);
  }



  return notes;

}
