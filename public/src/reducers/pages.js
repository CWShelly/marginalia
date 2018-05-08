const pagesReducerDefaultState = [];

export default (state = pagesReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_PAGE':
      return [
        ...state,
        action.page
      ];
    case 'REMOVE_PAGE':
     return state.filter(( { id }) =>{

       return id !== action.id
     }

     )

    case 'EDIT_PAGE':
     return state.map((page)=>{

       if(page.id === action.id){
         return{
           ...page,
           ...action.updates
         };
       } else{

         return page;
       }
     })
     case 'SET_PAGES':
      return action.pages
     default:
      return state;
  }
}
