
export default (pages) =>{

     const chapter_id = localStorage.getItem('chapter_id');

      const hasChapterId= (page)=>{
        return page.chapter_id === chapter_id;
      }

     const pages_of_this_book = pages.filter(hasChapterId)

    return pages_of_this_book;

}
