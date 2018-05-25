import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
// import selectNotes from '../selectors/notes';
// import bookNotes from '../selectors/bookNotes'
import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';
// import tagKeys from '../selectors/tagKeys';


import filters from '../selectors/filter';
import tagFilter from '../selectors/tagFilter'

export class NoteList extends React.Component{
  state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title')
  }

componentDidMount(){
  console.log(this.props.notes);
}
  render(){

       return(
        <div className="container">
        <ul className="reverse-list">
        {this.props.notes.map((note)=>{
          return <NoteListItem key={note.id} {...note} />
        })}

        </ul>

        </div>
      )
  }
}

const mapStateToProps = (state, props)=>{

  const x = state.notes.map((m)=>{
    return m.tags
  })

  const y = x.map((c)=>{
    return Object.keys(c)
  })


if(props.history.location.pathname.slice(1,10)
 === "viewNotes"){

  return{
   notes: filterThis(state.notes, 'book_id'),

  }

}

else {
  for(let i = 0; i<state.notes.length; i++){
    state.notes[i].tag_keys = Object.keys(state.notes[i].tags)
  }

  // console.log(state.notes);

  console.log(filters(state.notes, state.filters));
  return{
   notes: filters(state.notes, state.filters),
   // tags: tagFilter(state.notes, state.filters)
  }

}

}

export default connect(mapStateToProps)(NoteList);
