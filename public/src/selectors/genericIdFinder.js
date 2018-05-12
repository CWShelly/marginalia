

export default (collection, number , collection_id ) =>{


    const hasCollectionId = (collection)=>{
   
      return collection[number] === collection_id;
    }

    const in_this_book = collection.filter(hasCollectionId);

    return in_this_book;


}
