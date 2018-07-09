import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

export class LogIn extends React.Component{
    state={
      quotes:[
        {_quote: 'Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in. Be curious!',
        person: 'Katherine Johnson'
      },

      {_quote: 'No one undertakes research in physics with the intention of winning a prize. It is the joy of discovering something no one knew before.',
      person: 'Stephen Hawking'
       },

      {_quote: "Research means that you don't know, but are willing to find out.",
      person: 'Charles F. Kettering'
      },
    {_quote: 'Think before you speak. Read before you think.',
    person: 'Fran Lebowitz'
    },
    {_quote: 'Show me a family of readers, and I will show you the people who move the world.',
    person: 'Napoléon Bonaparte'
     }
   ],

   selectedQuote: undefined
    }

    getQuote = ()=>{
         const rand = Math.floor(Math.random() * this.state.quotes.length);
        const quote = this.state.quotes[rand];
        this.setState(()=>({selectedQuote: quote}))
    }

    componentDidMount(){

      this.getQuote()

    }

    render(){

      return(
<Fragment>  <p className="lead"> <Link style={{color:"grey"}}
  to={`/about`}>Marginalia Geek</Link>
  </p>
        <div className="jumbotron jumbotron-fluid JumboHeaderImg">

        <div className="container login-container mx-auto">

        <h1 className="display-4 text-center">{this.state.selectedQuote && this.state.selectedQuote._quote}</h1>
        <p className="lead text-center">{this.state.selectedQuote &&  this.state.selectedQuote.person}</p>

         <button className="btn btn-block login-button mx-auto" onClick={this.props.startLogin}>
            <p>Enter <i className="fa fa-sign-in"></i></p>
         </button>

        </div>

        </div>
        </Fragment>
      )
    }
}


 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
