

export default (collection, collection_id ) =>{
 
    const _collection_id = localStorage.getItem(collection_id);
    const hasCollectionId = (collection)=>{

      return collection[collection_id] === _collection_id;
    }

    const in_this_book = collection.filter(hasCollectionId);

    return in_this_book;


}
