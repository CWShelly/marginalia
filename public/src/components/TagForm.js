import React from 'react';
import moment from 'moment';

export default class  TagForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      createdAt: props.page ? moment(props.page.createdAt): moment(),
      tagArr:[],
      error: '',
      tag:{}
    }
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
      this.props.onSubmit({
      tag: this.state.tag
      })
      if(!this.state.error){
      this.state.tag = {}

      }
    }
  })

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
        {tagArr: prevState.tagArr.concat(_tag)})
      )
  }




  render(){
    console.log(this.state.tag);

    return(
      <div >
          {this.state.error && <p className="form-error" >{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
         <label>add tag:</label>
          <input  className="tag-input" type="text" name="tag"

          />
          <button type="submit" className="form-button-check" >
          submit</button>
        </form>

       {this.state.tagArr.length > 0 && <button onClick={this.sendToDB}>Finish</button>}
      </div>

    )
  }
}
