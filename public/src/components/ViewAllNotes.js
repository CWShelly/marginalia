import React from 'react';
import NoteList from './NoteList';
import ListFilters from './ListFilters'

 export default class ViewAllNotes extends React.Component{
   render(){

     return(
       <div className="row" >
       <div className="col-sm-12 col-md-6">
           <ListFilters history={this.props.history}/>
       </div>
       <div className="col-sm-12 col-md-6">
       <NoteList history={this.props.history} />
       </div>
       </div>
     )
   }
 }
