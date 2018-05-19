import React from 'react';
import { connect } from 'react-redux';
import { startAddTag } from '../actions/tags';
import TagForm from './TagForm';

import filterThis from '../selectors/genericSelector';
import rP from '../selectors/redundant';

export class AddTag extends React.Component{

  constructor(props){
    super(props);
      this.state={
       error:''
      }
  }

  render(){
    return (
      <div>
          {this.state.error && <p className="form-error"> {this.state.error}</p>}
       <TagForm

       onSubmit={(tag)=>{
         console.log(tag);
         this.setState(() => ({error: ''}))
          this.props.startAddTag(tag)


     }}  error={this.state.error}
       />
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  console.log(state);
      return {
        tags: state.tags
      }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddTag: (tag)=> dispatch(startAddTag(tag))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddTag)
