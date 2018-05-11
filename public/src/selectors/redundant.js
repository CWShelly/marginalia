

export default (collections, item, number  ) =>{

const hasCollectionId = (collection)=>{
 
  return collection[number] === item;
}

const in_this_book = collections.filter(hasCollectionId);

return in_this_book.length === 0;


}
