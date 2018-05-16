
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'chapter',

}

export default (state=filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
     return{
       ...state,
       text: action.text
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
