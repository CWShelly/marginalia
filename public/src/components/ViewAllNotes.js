import React from 'react';
import NoteList from './NoteList';
import ListFilters from './ListFilters'

 export default class ViewAllNotes extends React.Component{
   render(){
 
     return(
       <div className="container">
       <div>
           <ListFilters history={this.props.history}/>
       </div>
       <NoteList history={this.props.history} />
       </div>
     )
   }
 }
