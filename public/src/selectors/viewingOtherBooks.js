export default (books) =>{
console.log(books);
const filteredBooks = books.filter((book)=>{
  return book.show_book === true;
})
console.log(filteredBooks);
  return filteredBooks;


}
