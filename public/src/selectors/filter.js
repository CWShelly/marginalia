export default (collection, {text}) =>{
console.log(collection);
 // console.log(by);

 return collection.filter((_collection)=>{
   const textMatch = _collection.note.toLowerCase().includes(text.toLowerCase())
   return textMatch
 })



}
