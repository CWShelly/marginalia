export default (collection,  {interest, bookTag}) =>{
console.log('interest', {interest});

console.log('booktag', {bookTag});

 return collection.filter((_collection)=>{


   let lowerCaseInterests = _collection.interest_keys.map((a)=>{
     return a.toLowerCase();
   })
   //
   // let lowerCaseBookTags= _collection.bookTag_keys.map((a)=>{
   //   return a.toLowerCase();
   // })


   const interestMatch = interest ? lowerCaseInterests.includes(interest.toLowerCase()) : 'no';
  const bookTagMatch = bookTag ? lowerCaseBookTags.includes(booktag.toLowerCase()) : 'no';
   return   interestMatch && bookTagMatch


 })


}
