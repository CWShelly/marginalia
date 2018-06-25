import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';

import { Link } from 'react-router-dom';
import filterThis from '../selectors/genericSelector';

import filters from '../selectors/filter';


import { startSetNotes } from '../actions/notes';

export class NoteList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    display: false,
    author_first_name: localStorage.getItem('author_first'),
    author_last_name:localStorage.getItem('author_last'),
    title: localStorage.getItem('title'),
    order: true,
    _style:{
      background:'black'
    }

  }
}

onClick = ()=>{
  this.setState((prevState)=>({
    order: !prevState.order
  }))
  console.log(this.state.order);
}

componentDidMount(){

this.props.startSetNotes()
}
    // <ul style={{display: "flex", display: this.state.order ? "column-reverse" : "column"}}>
  render(){

       return(
        <Fragment>

        <button className="btn btn-primary btn-lg mb-4"  onClick={this.onClick}>{this.state.order
          ? "view first to most recent" : "view most recent first"  }</button>
    <ul className={this.state.order ? "normal-list" : "reverse-list"}>
        {this.props.notes.map((note)=>{
          return <NoteListItem key={note.id} {...note} />
        })}

        </ul>

        </Fragment>
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
   for(let i = 0; i<state.notes.length; i++){
     state.notes[i].tag_keys = Object.keys(state.notes[i].tags)
   }

   const this_books_notes = filterThis(state.notes, 'book_id')

  return{
       notes: filters(this_books_notes, state.filters),

  }

}


else {


  return{
   notes: filters(state.notes, state.filters),
  }

}

}

const mapDispatchToProps=(dispatch, props)=>{

  return{
    startSetNotes: ()=>{dispatch(startSetNotes())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
