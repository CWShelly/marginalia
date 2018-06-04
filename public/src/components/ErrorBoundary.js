import React from 'react';

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = { hasError: false};
  }

  comonentDidCatch(error, info){
    this.setState(()=>({hasError: true}))
  }
  render(){
 return(
   <div>
   if(this.state.hasError){
     return(<h1>error</h1>)
   }
   return this.props.children;
   </div>
 )
  }

}
