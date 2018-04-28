import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const NoteListItem = (
  { id,
    chapter_number,
    page_number,
    paragraph_number,
    note,
    createdAt
  }) =>(
    <div>
    <p>{chapter_number}... {page_number} ... {paragraph_number} ... {note}</p>
    </div>
  )


 
export default NoteListItem;
