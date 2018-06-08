
export const setTextFilter = (text ='')=>({
  type: 'SET_TEXT_FILTER',
  text
});

export const setInterestFilter = (interest ='')=>({
  type: 'SET_INTEREST_FILTER',
  interest
});

export const setTagFilter=(tag='')=>{

  return{
    type: 'SET_TAG_FILTER',
    tag

  }
}
export const sortByChapter = ()=>({
  type: 'SORT_BY_AMOUNT'
});;
