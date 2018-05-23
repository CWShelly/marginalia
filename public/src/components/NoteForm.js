import React from 'react';
import moment from 'moment';

export default class NoteForm extends React.Component{
  state = {
    chapter_number: 0,
    page_number:0,
    paragraph_number:0,
    note: '',
    title: localStorage.getItem('title'),
    createdAt: moment(),
    book_id: localStorage.getItem('book_id'),
    errorNote: '',
    remainingCharacters: 140,
   tagArr:[],
    tags:{},
    items:[],
    input: ''


  }

  hasSet=(x)=>{
    return new Promise((resolve,reject)=>{

      let arr = this.state.tagArr.reduce((collection, item)=>{
        collection[item]=true
        return collection
      },{});
     this.setState((prevState)=>({
       tag: arr

     }))
     resolve(x)
     reject('failure')

    })
  }

  sendToDB=(e)=>{
    const a = this.hasSet();
    a.then(()=>{
      console.log('testing');

      e.persist()
      if(!this.state.tag )
      {
          this.setState(()=>({error:'Please enter a tag'}))
      } else{
        this.setState(()=>({error: ''}));
        console.log(this.state);
        if(!this.state.error){
        this.state.tag = {}

        }
      }
    })
  }


  onChapterNumberChange = (e) =>{
   const chapter_number= parseInt( e.target.value);
   this.setState(()=>({ chapter_number}));
  }
  onPageNumberChange = (e) =>{
    const page_number = parseInt( e.target.value);
    this.setState(()=>({ page_number }));

  }
  onParagraphNumberChange = (e) =>{
    const paragraph_number = parseInt( e.target.value);
    this.setState(()=>({ paragraph_number }));

  }
  onNoteChange = (e) =>{
        e.persist()
    const note = e.target.value;
    this.setState((prevState)=>({
       count: parseInt(prevState.count) + 1,
       remainingCharacters: 140 - parseInt(e.target.value.length),
       note,
      }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if (!this.state.chapter_number || !this.state.page_number || !this.state.paragraph_number ){
      this.setState(()=>({errorNote: 'Please enter stuff'}));
    } else{
      this.setState(()=>({errorNote: ''}));
      this.props.onSubmit({
        chapter_number: this.state.chapter_number,
        page_number: this.state.chapter_number,
        paragraph_number: this.state.paragraph_number,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
        title: this.state.title,
        book_id:this.state.book_id,
        tags: this.state.tags

      })
    }

    if(!this.state.errorNote){
      this.state.chapter_number = 0;
      this.state.page_number = 0;
      this.state.paragraph_number =0;
      this.state.note =''
      this.state.remainingCharacters = 140;
    }
  }


handleInputChange=(e)=>{
  e.persist();
  console.log(e);
  console.log('handling input change');
  this.setState(()=>({ input:e.target.value }))
}

handleInputKeyDown=(e)=>{
  // e.persist()
  console.log('handling key down');
  console.log(e.keyCode);
  if(e.keyCode === 13){
    const value = e.target.value.trim();
    this.setState(()=>({
    items: [...this.state.items, value],
    input: ''}))
  }

  if(this.state.items.length && e.keyCode === 8 && !this.state.input.length){
    this.setSate(()=>({
      items: this.state.items.slice(0, state.items.length -1)
    }))
  }
}

handleRemoveItem=(itemToRemove)=>{
console.log('es');
   this.setState((prevState)=>{

      items: prevState.items.filter((item,x)=>{

        return itemToRemove !== x
      })
    })



}

componentDidUpdate(){
  console.log('updated');
}
  render(){
    console.log(this.state.items);

    return(
      <div>
      {this.state.errorNote && <p className="note-error">{this.state.errorNote}</p>}



      <form className="note-form" onSubmit={this.onSubmit}>
      <p>Add a note: {this.state.remainingCharacters} characters left.</p>
      <textarea
      className="note-form-textarea"
      type="text"
      placeholder="Enter your note here."
      maxLength="140"
      value={this.state.note}
      onChange={this.onNoteChange}
      />

      Chapter:
      <input className="note-form-input"
      type="number"
      placeholder="Chapter"
      value={this.state.chapter_number}
      onChange={this.onChapterNumberChange}
      />

      Page:
      <input
      className="note-form-input"
      type="number"
      placeholder="Page"
      value={this.state.page_number}
      onChange={this.onPageNumberChange}
      />

      Paragraph:
      <input
      className="note-form-input"
      type="number"
      placeholder="Paragraph"
      value={this.state.paragraph_number}
      onChange={this.onParagraphNumberChange}
      />
      <input
      type="text"
      placeholder="tag"

      />

      <button disabled={!this.state.chapter_number ||
         !this.state.page_number ||
         !this.state.paragraph_number ||
         !this.state.note } className="note-form-button">Add Note</button>
      </form>

<div>
<ul>
{this.state.items.map((item, x)=>{
  return <li key={x}
>
  {item}
  <a onClick={(e)=>{
    this.handleRemoveItem(item)
  }}>(x)</a>
  </li>
})}
<input
value={this.state.input}
onChange={this.handleInputChange}
onKeyDown={this.handleInputKeyDown} />
</ul>
</div>
      </div>
    )



}
}
