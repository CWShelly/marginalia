
const filtersReducerDefaultState = {
  text: '',
  tag: '',
  interest:'',
  bookTag: '',
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

       case 'SET_BOOKTAG_FILTER':
        return{
          ...state,
          bookTag: action.bookTag

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
