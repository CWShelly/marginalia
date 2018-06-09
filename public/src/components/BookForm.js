import React from 'react';
import moment from 'moment';

export default class BookForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      author_last_name: props.book ? props.book.author_last_name : '',
      author_first_name:props.book ? props.book.author_first_name : '',
      title:  props.book ? props.book.title : '',
      createdAt: props.book ? moment(props.book.createdAt): moment(),
      show_book: true,
      error: '',
      bookTagArr:props.book ? Object.keys(props.book.bookTags) : [],
      bookTags: props.book ? props.book.bookTags : {},
      input: ''
    }
  }

  onAuthorLastNameChange = (e) =>{
   const author_last_name = e.target.value;
   this.setState(()=>({ author_last_name}));
  }
  onAuthorFirstNameChange = (e) =>{
    const author_first_name = e.target.value;
    this.setState(()=>({ author_first_name }));

  }
  onTitleChange = (e) =>{
    const title = e.target.value;
    this.setState(()=>({ title }));

  }
  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }


  hasSet=(x)=>{
    return new Promise((resolve,reject)=>{
      let arr = this.state.bookTagArr.reduce((collection, item)=>{
        collection[item]=true
        return collection
      },{});
     this.setState((prevState)=>({
       bookTags: arr
     }))
     resolve(x)
     reject('failure')

    })
  }


  onSubmit = (e)=>{
    e.preventDefault();

      const a = this.hasSet();

      a.then(()=>{
        if(!this.state.bookTags)
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
        if( !this.state.author_last_name || !this.state.title){
          this.setState(()=>({error: 'Please enter author\'s first and last name, and book title'}));
        } else{
          this.setState(()=>({error: ''}));
          this.props.onSubmit({
            author_last_name: this.state.author_last_name,
            author_first_name: this.state.author_first_name,
            title: this.state.title,
            createdAt: this.state.createdAt.valueOf(),
            show_book: this.state.show_book,
            bookTags: this.state.bookTags

          })

          if(!this.state.error){
            this.state.author_last_name = "";
            this.state.author_first_name = "";
            this.state.title = "";
            this.show_book = true;
          }
        }
      })





  }

  onClick = ()=>{
        console.log(this.state.show_book);
    this.setState((prevState)=>({
      show_book: !prevState.show_book
    }))
    console.log(this.state.show_book);
  }

  handleInputChange=(e)=>{
    e.persist();


    this.setState(()=>({ input:e.target.value }))
  }
  handleInputKeyDown=(e)=>{

   // console.log(e.keyCode);
    if(e.keyCode === 13){
      const value = e.target.value.trim();
      this.setState(()=>({
      bookTagArr: [...this.state.bookTagArr, value],
      input: ''}))
    }


    if(this.state.bookTagArr.length && e.keyCode === 8 && !this.state.input.length){
      this.setState(()=>({
        bookTagArr: this.state.bookTagArr.slice(0, this.state.bookTagArr.length -1)
      }))
    }
  }


  handleRemoveItem=(itemToRemove, key)=>{
   this.setState((prevState)=>{
     return{
       bookTagArr:this.state.bookTagArr.filter((x)=>{
         return x !== itemToRemove;
       })
     }
  })
  }


  render(){

    return(
      <div className="container-book-form">

  <button className="toggle-show-book" onClick={this.onClick}>Click to make {this.state.show_book ? "private": " public" }</button>
      {this.state.error && <p className="form-error" >{this.state.error}</p>}

      <div>
            <ul className="tag-list">
            {this.state.bookTagArr.map((item, x)=>{
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
      <form   onSubmit={this.onSubmit}>

      <input className="book-input"
      type="text"
      placeholder="Author Last Name"
      value={this.state.author_last_name}
      onChange={this.onAuthorLastNameChange}
      />


      <input  className="book-input"

      type="text"
      placeholder="Author First Name"
      value={this.state.author_first_name}
      onChange={this.onAuthorFirstNameChange}
      />

      <input  className="book-input"
      type="text"
      placeholder="Title"
      value={this.state.title}
      onChange={this.onTitleChange}
      />


      <button className="form-button-book">  Add Book</button>

      </form>

      </div>
    )
  }

}
