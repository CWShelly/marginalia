import React from 'react';
import moment from 'moment';

export default class NoteForm extends React.Component{

  constructor(props){


    super(props);
    this.state = {
      chapter_number: localStorage.getItem('note_state') ? JSON.parse(localStorage.getItem('note_state')).chapter_number : 0,
      page_number:localStorage.getItem('note_state') ? JSON.parse(localStorage.getItem('note_state')).page_number : 0,
      paragraph_number:localStorage.getItem('note_state') ? JSON.parse(localStorage.getItem('note_state')).paragraph_number : 0,
      note: props.note ? props.note.note :  '',
      title: localStorage.getItem('title'),
      createdAt: moment(),
      book_id: localStorage.getItem('book_id'),
      errorNote: '',
      remainingCharacters: 210,
      tagArr:props.note? Object.keys(props.note.tags) : [],
      tags: props.note ? props.note.tags : {},
      input: ''
    }

  }
componentDidMount(){


  const last_state=JSON.parse(localStorage.getItem('note_state'))

}
  hasSet=(x)=>{
    return new Promise((resolve,reject)=>{
      let arr = this.state.tagArr.reduce((collection, item)=>{
        collection[item]=true
        return collection
      },{});
     this.setState((prevState)=>({
       tags: arr
     }))
     resolve(x)
     reject('failure')

    })
  }

  sendToDB=(e)=>{

    e.preventDefault()
    const a = this.hasSet();
    a.then(()=>{
      if(!this.state.tag )
      {
          this.setState(()=>({error:'Please enter a tag'}))
      } else{
        this.setState(()=>({error: ''}));
        if(!this.state.error){
        // this.state.tag = {}
        }
      }
    })
    .then(()=>{
      if (!this.state.chapter_number || !this.state.page_number || !this.state.paragraph_number ){
        this.setState(()=>({errorNote: 'Please enter stuff'}));
      }
      else if(!this.state.tagArr.length){
          this.setState(()=>({errorNote: 'Please enter at least one tag'}));
          }
       else{

        localStorage.setItem('note_state', JSON.stringify(this.state))
        this.setState(()=>({errorNote: ''}));
        this.props.onSubmit({
          chapter_number: this.state.chapter_number,
          page_number: this.state.page_number,
          paragraph_number: this.state.paragraph_number,
          note: this.state.note,
          createdAt: this.state.createdAt.valueOf(),
          title: this.state.title,
          book_id:this.state.book_id,
          tags: this.state.tags
        })
      }
      if(!this.state.errorNote){
        this.state.note ='',
        this.state.remainingCharacters = 210;
        this.state.tags= {},
        this.state.tagArr=[]
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
       remainingCharacters: 210 - parseInt(e.target.value.length),
       note,
      }));

  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }

handleInputChange=(e)=>{
  e.persist();


  this.setState(()=>({ input:e.target.value }))
}

handleInputKeyDown=(e)=>{

 console.log(e.keyCode);
  if(e.keyCode === 13){
    const value = e.target.value.trim();
    this.setState(()=>({
    tagArr: [...this.state.tagArr, value],
    input: ''}))
  }


  if(this.state.tagArr.length && e.keyCode === 8 && !this.state.input.length){
    this.setState(()=>({
      tagArr: this.state.tagArr.slice(0, this.state.tagArr.length -1)
    }))
  }
}

handleRemoveItem=(itemToRemove, key)=>{
 this.setState((prevState)=>{
   return{
     tagArr:this.state.tagArr.filter((x)=>{
       return x !== itemToRemove;
     })
   }
})
}


  render(){

    return(
      <div>
    {this.state.errorNote && <p className="note-error">{this.state.errorNote}</p>}

  <div>
        <ul className="tag-list">
        {this.state.tagArr.map((item, x)=>{
          return <li className="tag-list"  key={x}
        >
          <span><button className="add-tag">{item}</button>
          <button  className="form-button-check"   onClick={(e)=>{
            this.handleRemoveItem(item, x)
          }}>x</button></span>
          </li>
        })}
        <p>
        <label>add tags:</label><input
        value={this.state.input}
        onChange={this.handleInputChange}
        onKeyDown={this.handleInputKeyDown} />
        </p>
        </ul>


  </div>

<form className="note-form" onSubmit={this.sendToDB}>
  <textarea
  className="form-textArea"
  type="text"
  placeholder="Enter your note here."
  maxLength="210"
  value={this.state.note}
  onChange={this.onNoteChange}
  />
  <p>{this.state.remainingCharacters} characters left.</p>
  <p>Chapter Number:
  <input className="note-form-input"
  type="number"
  placeholder="Chapter"
  value={this.state.chapter_number}
  onChange={this.onChapterNumberChange}
  /></p>

  <p>Page Number:
  <input
  className="note-form-input"
  type="number"
  placeholder="Page"
  value={this.state.page_number}
  onChange={this.onPageNumberChange}
  />
  </p>

  <p>Paragraph Number:
  <input
  className="note-form-input"
  type="number"
  placeholder="Paragraph"
  value={this.state.paragraph_number}
  onChange={this.onParagraphNumberChange}
  />
  </p>

  <button disabled={!this.state.chapter_number ||
     !this.state.page_number ||
     !this.state.paragraph_number ||
     !this.state.note } className="form-button-book">Add Note</button>
  </form>

      </div>
    )



}
}
