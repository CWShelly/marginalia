import database from '../firebase/firebase'


export const addTag = (tag)=>({
  type: 'ADD_TAG',
  tag
})

export const startAddTag = (tagData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

  const {
    paragraph_id= localStorage.getItem('paragraph_id'),
    tag = [],
    createdAt = 0

  } = tagData;
  const _tag = { paragraph_id, tag, createdAt}

  database.ref(`users/${uid}/tags`).push(_tag)
  .then((ref) => {
    dispatch(addTag({
      id: ref.key,
      ... _tag
    }));
  })
  }

}


export const startRemovetag =({ id} = {})=>{
  const tag_id = id;

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/tags/${ id }`).remove()
    .then(() => {
      dispatch(removeTag({ id }))
    })
  }
}

export const removeTag = ({ id } = {}) =>({
  type: 'REMOVE_tag',
  id
})




export const setTags = (tags) => ({
  type: 'SET_TAGS',
  tags
})

export const startSetTags = () => {
 return (dispatch, getState) => {
   const uid = getState().auth.uid
   return database.ref(`users/${uid}/tags`)
   .once('value')
   .then((snapshot) => {
     const tags = [];

     snapshot.forEach((childSnapshot) => {
       tags.push({
         id: childSnapshot.key,
         ...childSnapshot.val()
       })

     })
    dispatch(settags(tags))
   })

 }

}
