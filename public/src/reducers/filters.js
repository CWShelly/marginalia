
const filtersReducerDefaultState = {
  text: '',
  tag: '',
  interest:'',
  sortBy: 'chapter',



}

export default (state=filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
     return{
       ...state,
       text: action.text
     };
     case 'SET_TAG_FILTER':
      return{
        ...state,
        tag: action.tag

      };
      case 'SET_INTEREST_FILTER':
       return{
         ...state,
         interest: action.interest

       };


     case 'SORT_BY_CHAPTER':
     return{
       ...state,
       sortBy: 'chapter'
     }


    default:
    return state;
  }
}
