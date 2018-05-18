const tagsReducerDefaultState = [];

export default (state = tagsReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_TAG':
      return [
        ...state,
        action.tag
      ];
    case 'REMOVE_TAG':
     return state.filter(( { id }) =>{

       return id !== action.id
     }

     )

     case 'SET_TAGS':
      return action.tags
     default:
      return state;
  }
}
