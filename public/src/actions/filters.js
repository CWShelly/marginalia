
export const setTextFilter = (text ='')=>({
  type: 'SET_TEXT_FILTER',
  text
});


// export const setTagFilter = (tag={})=>({
//   type: 'SET_TAG_FILTER',
//   tag
// });

export const setTagFilter=(tag='')=>{
  console.log(tag);
  return{
    type: 'SET_TAG_FILTER',
    tag

  }
}
export const sortByChapter = ()=>({
  type: 'SORT_BY_AMOUNT'
});;
