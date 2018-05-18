import React from 'react';
import { connect } from 'react-redux';
import { startAddPage } from '../actions/pages';
// import PageForm from './PageForm';
import filterThis from '../selectors/genericSelector';
import rP from '../selectors/redundant';
import moment from 'moment';

export class NextPage extends React.Component{

  constructor(props){
    super(props);
      this.state={
      createdAt: props.page ? moment(props.page.createdAt): moment(),
      page_number:parseInt(localStorage.getItem('page_number')),
       error:''
      }
  }
  componentDidMount(){
    console.log('mount');
        console.log(this.state.page_number);
  }


nextPage=()=>{


  console.log('turning page');
    // this.setState(()=>({page_number: this.state.page_number+1}))
    // console.log(this.state.page_number);
    //
    this.props.startAddPage({page_number: this.state.page_number + 1})
    this.setState(()=>({page_number: this.state.page_number+1}))
   this.props.history.push(`/paragraph/${this.state.page_number + 1}/${localStorage.getItem('page_id')}`)

  }


  render(){
    return (
      <div>
          {this.state.error && <p className="form-error"> {this.state.error}</p>}



   <button className="form-button" onClick={this.nextPage}>Advance Page</button>


      </div>
    )
  }
}
const mapStateToProps = (state)=>{

console.log(state);
      return {
        filteredCollection: filterThis(state.pages, 'chapter_id')

      }
}


const mapDispatchToProps = (dispatch)=> ({
     startAddPage: (page)=> dispatch(startAddPage(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(NextPage)
