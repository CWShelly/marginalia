export default (collection,  {tag}) =>{
console.log(collection);
// console.log(text);
console.log(tag);
// console.log(tag.tag);

// console.log(typeof {tag});
 // return collection.filter((_collection)=>{
 //
 //   const textMatch = _collection.note
 //   .toLowerCase().includes(text.toLowerCase())
 //   // const tagMatch = tag ? _collection.tags.includes('Obama') : 'not'
 //   // return textMatch && tagMatch
 //   return textMatch
 //
 // })

let hasTags = (tag_keys, obj)=>obj.tag_keys.includes(tag)
// console.log(has);
let hasTag = collection.filter(x=>hasTags('tag_keys', x))


return hasTag
}
