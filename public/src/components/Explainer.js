import React from 'react';
import { Link } from 'react-router-dom'

export default class Explainer extends React.Component{
  render(){
    return(
      <div className="container">
      <img className= "container-img" src="/images/taking_notes.gif" loop="infinite" />
      <div className="explainer-subcontainer">
        <h1>Why <Link  
        to={`/`}>Marginalia Geek?</Link></h1>
        <h4>Because I forget almost everything I read… </h4>
        <p>And I’m not alone. A Google search on the issue brings up both <a href="https://www.theatlantic.com/science/archive/2018/01/what-was-this-article-about-again/551603/" target="_blank">plaintive meditations</a> and <a href="https://www.forbes.com/sites/forbesagencycouncil/2016/02/12/how-to-never-forget-what-you-read/#33fdb81475a4" target="_blank">cocksure advice</a>, and a common takeaway from the more instructive pieces is the emphasis on taking notes. Does this mean you’ll retain everything you read if you heed? Probably not, but this application is meant to serve as more of an external memory (<a href="https://blogs.scientificamerican.com/literally-psyched/on-writing-memory-and-forgetting-socrates-and-hemingway-take-on-zeigarnik/" target="_blank">sorry, Socrates</a>) that you can consult on the go, and if it does help you remember more of what you read, awesome.</p>
        <h4>Because I don’t want to rely on physical notebooks… </h4>
        <p> I love the feeling of cracking open a new Moleskine, but they’re not cheap. And even when I use the less expensive notebooks from the grocery store, there’s always the chance that I’ll lose them, or I’ll be out somewhere reading without one when I want to take notes. And even if I do manage to always have a notebook with me at all times, I’m going to fill them up, and I’m going to need more, and they’re going to take up physical space, and my place isn’t that big, and I don’t want my obituary to read, “She died after being crushed by the 2,000 spiral notebooks she devoted to the unfinished works of Robert Caro”. Then there’s the indexing issue. For a while, I was using tiny Post-It flags to mark off certain sections, until I discovered my cat thinks they’re delicious (and yet, she won’t touch anything I cook. Nothing like being told that paper is tastier than your grilled chicken. My cat has basically called me a “Karen”). </p>
        <img className="container-img" src="/images/karen.gif" loop="infinite" />
        <h4>Because my handwriting is awful</h4>
        <p>And yeah, I could try to write more legibly, but what about when I’m on the bus, or trying to take notes during an earthquake, or simply trying to write after too many shots of espresso (I live in Seattle. These are all likely scenarios)? I’ve also tried writing in the margins of the books themselves, using nano point archival ink pens, but again, when your handwriting is as chickenscratchy as mine, it’s hard not to look like a tinfoil hat-wearing conspiracy yarn addict, especially when you’re reading a book about foreign policy under the Ike administration and the Cold War in general (seriously, it's scientifically impossible to consecutively handwrite the letters "C", "I", and "A", and not worry that you're a short trip from bunker living)</p>
        <img className="container-img" src="/images/always_sunny.gif" loop="infinite" />
        <h4>Because not every book is available in Kindle form yet</h4>
        <p>I’m not one of those snobs who believes e-books are inferior to physical ones. I love the way Kindle lets you highlight passages and take notes, but a lot of the books that I read aren’t available in e-reader form just yet. If you want to have a place online to keep your physical book-specific notes, Marginalia Geek is here for you. And if you decide to roll your own with Google Docs or Evernote or whatever, that’s cool, too. You do you. The point, though, is to keep reading, keep learning, and keep exploring.</p>
       </div>

    </div>
  )
  }
}
