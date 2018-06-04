export default (collection,  {text, tag}) =>{

let hasTags = (tag_keys, obj)=>obj.tag_keys.includes(tag);


 return collection.filter((_collection)=>{
   // console.log(_collection.tag_keys)
   let lowerCaseTags = _collection.tag_keys.map((a)=>{
     return a.toLowerCase();
   })
// console.log(lowerCaseTags);
   const textMatch = _collection.note
   .toLowerCase().includes(text.toLowerCase())

   const tagMatch = tag ? lowerCaseTags.includes(tag.toLowerCase()) : 'no'
   return textMatch && tagMatch


 })


}
