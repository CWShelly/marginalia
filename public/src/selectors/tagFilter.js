export default (collection, tag) =>{
// console.log(collection);

console.log(tag);

 const tagsMap = collection.map((c)=>{
   return c.tags
 })

// console.log(tagsMap);
 let keyArr = ()=>{
  let arr = []
   for(let i = 0; i<tagsMap.length; i++){
     console.log(Object.keys(tagsMap[i]));
     arr.push(Object.keys(tagsMap[i]))
   
   }
   return arr

 }


 // console.log(keyArr());
// if(text){
 // return collection.filter((_collection)=>{
 //   console.log('finding');
 //   const textMatch = _collection.note
 //   .toLowerCase().includes(text.toLowerCase())
 //   const tagMatch = _collection
 //   return textMatch && tagMatch
 //   // return tagMatch
 // })

return keyArr()
// }
}
