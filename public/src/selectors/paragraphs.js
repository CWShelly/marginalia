
export default (paragraphs) =>{

  const page_id = localStorage.getItem('page_id');

   const hasPageId= (paragraph)=>{
     return paragraph.page_id === page_id;
   }

  const paragraphs_of_this_book = paragraphs.filter(hasPageId)

 return paragraphs_of_this_book;


}
