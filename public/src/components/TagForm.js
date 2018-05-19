import React from 'react';
import moment from 'moment';

export default class  TagForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.page ? moment(props.page.createdAt): moment(),
      tag:[],
      error: ''
    }
  }

  onChange=(e)=>{


      // const _tag= e.target.value;

      // this.setState((prevState)=>({ tag:prevState.tag.concat[_tag] }));

  }

  onDateChange = (createdAt) =>{
   if(createdAt){
     this.setState(()=>({ createdAt }))
   }
  }


  onSubmit = (e)=>{
    console.log('a thing');
    e.preventDefault();
    console.log(e.target.elements.tag.value.trim());
    const _tag= e.target.elements.tag.value.trim();

      this.setState((prevState)=>(
        {tag: prevState.tag.concat(_tag)})
      )
  }

test =(e)=>{
   console.log(this.state.tags);
  console.log('testing');

  e.preventDefault();
  if(!this.state.tag )
  {
      this.setState(()=>({error:'Please enter a tag'}))
  } else{
    this.setState(()=>({error: ''}));
    this.props.onSubmit({
    tag: this.state.tag
    })
    if(!this.state.error){
    this.state.tag = []

    }
  }
}
  render(){
    console.log(this.state.tag);

    return(
      <div >
          {this.state.error && <p className="form-error" >{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
         <label>add tag:</label>
          <input  className="tag-input" type="text" name="tag"
          onChange={this.onChange}
          />
          <button type="submit" className="form-button-check" >
          submit</button>
        </form>
       <button onClick={this.test}>Finish</button>
      </div>

    )
  }
}
