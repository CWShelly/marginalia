const summariesReducerDefaultState = [];

export default (state = summariesReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_SUMMARY':
      return [
        ...state,
        action.chapterSummary
      ];
    case 'REMOVE_SUMMARY':
     return state.filter(( { id }) =>{

       return id !== action.id
     }

     )

    case 'EDIT_SUMMARY':
     return state.map((summary)=>{

       if(summary.id === action.id){
         return{
           ...summary,
           ...action.updates
         };
       } else{

         return summary;
       }
     })
     case 'SET_SUMMARIES':
      return action.summaries
     default:
      return state;
  }
}
