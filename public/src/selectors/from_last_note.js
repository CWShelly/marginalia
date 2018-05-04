export default (notes) =>{

console.log(notes.length);
if(notes.length> 0){
  const book_id = localStorage.getItem('book_id');

  const hasBookId= (note)=>{
    return note.book_id === book_id;
  }

 const notes_of_this_book = notes.filter(hasBookId)


return notes_of_this_book[notes_of_this_book.length-1]
}
else{
  return []
}


}
