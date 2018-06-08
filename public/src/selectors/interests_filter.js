export default (collection,  {interest}) =>{
console.log('interest', {interest});



 return collection.filter((_collection)=>{


   let lowerCaseTags = _collection.interest_keys.map((a)=>{
     return a.toLowerCase();
   })



   const interestMatch = interest ? lowerCaseTags.includes(interest.toLowerCase()) : 'no';

   // const interestMatch = interest ? lowerCaseInterests.includes(interest.toLowerCase()) : 'no'
   return   interestMatch


 })


}
