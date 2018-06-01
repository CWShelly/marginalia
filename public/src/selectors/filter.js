export default (collection,  {text, tag}) =>{

let hasTags = (tag_keys, obj)=>obj.tag_keys.includes(tag);


 return collection.filter((_collection)=>{

   const textMatch = _collection.note
   .toLowerCase().includes(text.toLowerCase())

   const tagMatch = tag ? _collection.tag_keys.includes(tag) : 'no'
   return textMatch && tagMatch


 })


}
