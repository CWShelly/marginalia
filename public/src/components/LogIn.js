import React from 'react';
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
      console.log('hello it mounted login');
      this.getQuote()

    }

    render(){

      return(
        <div className="JumboHeaderImg">
            <p className="lead"> <Link style={{color:"white"}}
            to={`/about`}>Marginalia Geek</Link>
            </p>

           <button className="btn btn-block login-button " onClick={this.props.startLogin}>

           <p>{this.state.selectedQuote && this.state.selectedQuote._quote}</p>
           <p>{this.state.selectedQuote &&  this.state.selectedQuote.person}</p>
           <p><i className="fa fa-sign-in"></i></p>
           </button>
        </div>
      )
    }
}


 const mapDispatchToProps = (dispatch) =>({
   startLogin: ()=>dispatch(startLogin())
 });

 export default connect(undefined, mapDispatchToProps)(LogIn);
