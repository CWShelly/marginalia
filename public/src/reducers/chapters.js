const chaptersReducerDefaultState = [];

export default (state = chaptersReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_CHAPTER':
      return [
        ...state,
        action.chapter
      ];
    case 'REMOVE_CHAPTER':
     return state.filter(( { id }) =>{

       return id !== action.id
     }

     )

    case 'EDIT_CHAPTER':
     return state.map((chapter)=>{

       if(chapter.id === action.id){
         return{
           ...chapter,
           ...action.updates
         };
       } else{

         return chapter;
       }
     })
     case 'SET_CHAPTERS':
      return action.chapters
     default:
      return state;
  }
}
