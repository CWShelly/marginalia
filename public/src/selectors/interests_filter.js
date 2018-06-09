export default (collection,  {tag}) =>{
 console.log({tag});

 return collection.filter((_collection)=>{
console.log(_collection);

   let lowerCaseInterests = _collection.tag_keys.map((a)=>{
     return a.toLowerCase();
   })
   //
   // let lowerCaseBookTags= _collection.bookTag_keys.map((a)=>{
   //   return a.toLowerCase();
   // })


   // const interestMatch = interest ? lowerCaseInterests.includes(tag.toLowerCase()) : 'no';
  const bookTagMatch = tag ? lowerCaseInterests.includes(tag.toLowerCase()) : 'no';
   return  bookTagMatch


 })


}
