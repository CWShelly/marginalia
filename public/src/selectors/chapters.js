
export default (chapters) =>{


     const book_id = localStorage.getItem('book_id');

      const hasBookId= (chapter)=>{
        return chapter.book_id === book_id;
      }

     const chapters_of_this_book = chapters.filter(hasBookId)

    return chapters_of_this_book;


}
