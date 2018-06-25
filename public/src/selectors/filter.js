export default (collection,  {text, tag}) =>{
 
// let hasTags = (tag_keys, obj)=>obj.tag_keys.includes(tag);
// console.log(hasTags);


 return collection.filter((_collection)=>{

   // console.log(_collection.tag_keys)
   let lowerCaseTags = _collection.tag_keys.map((a)=>{
     return a.toLowerCase();
   })

// let lowerCaseInterests = _collection.interest_keys.map((a)=>{
//   return a.toLowerCase()
// })


   const textMatch = _collection.note
   .toLowerCase().includes(text.toLowerCase())

   const tagMatch = tag ? lowerCaseTags.includes(tag.toLowerCase()) : 'no';

   // const interestMatch = interest ? lowerCaseInterests.includes(interest.toLowerCase()) : 'no'
   return textMatch && tagMatch


 })


}
