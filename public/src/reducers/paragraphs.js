const paragraphsReducerDefaultState = [];

export default (state = paragraphsReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_PARAGRAPH':
      return [
        ...state,
        action.paragraph
      ];
    case 'REMOVE_PARAGRAPH':
     return state.filter(( { id }) =>{

       return id !== action.id
     }

     )

    case 'EDIT_PARAGRAPH':
     return state.map((paragraph)=>{

       if(paragraph.id === action.id){
         return{
           ...paragraph,
           ...action.updates
         };
       } else{

         return paragraph;
       }
     })
     case 'SET_PARAGRAPHS':
      return action.paragraphs
     default:
      return state;
  }
}
