import React from 'react';
import NoteList from './NoteList';
import ListFilters from './ListFilters'

 export default class ViewAllNotes extends React.Component{
   render(){
     console.log(this.props);
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
