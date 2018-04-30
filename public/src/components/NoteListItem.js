import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const NoteListItem = (
  { id,
    chapter_number,
    page_number,
    paragraph_number,
    note,
    createdAt,
    index
  }) =>(
    <div>
    <p>{index + 1}. {note}</p>
    <p>chapter:{chapter_number} page:{page_number} paragraph:{paragraph_number}</p>
    </div>
  )



export default NoteListItem;
