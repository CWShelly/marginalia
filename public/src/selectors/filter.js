export default (collection,  {text, tag}) =>{
 


 return collection.filter((_collection)=>{


   let lowerCaseTags = _collection.tag_keys.map((a)=>{
     return a.toLowerCase();
   })



   const textMatch = _collection.note
   .toLowerCase().includes(text.toLowerCase())

   const tagMatch = tag ? lowerCaseTags.includes(tag.toLowerCase()) : 'no';

   // const interestMatch = interest ? lowerCaseInterests.includes(interest.toLowerCase()) : 'no'
   return textMatch && tagMatch


 })


}
