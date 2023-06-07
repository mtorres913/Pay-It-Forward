import React from 'react';
import LinkedIn from '/Users/Miguel/Documents/unit-19/Pay-It-Forward/src/LinkedIn.png'
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
 
// '/Users/Miguel/Documents/unit-19/Pay-It-Forward/src/LinkedIn.png'

  return (
    <div className="container">
      <div>
        <p>Welcome to my first app, Pay It Forward! I'm really passionate about volunteering and doing things for others.
It can be easy to forget to do things for others, or if that's something you want to do more of and work on, this app would challenge/remind you to put kindness out in the world through acts of kindness.
On Login, the app gives you a random act of kindness to do for someone from a list of available acts.
 The app also gives the user the option to edit, post , delete acts to the list via an edit page that displays all available acts and available options as described for all new and existing acts.
The user would also have the option to: check an act once completed, favorite acts, or get a new random act. 
</p>

<p>This version uses React.js, Redux, Axios, Express.js, Node.js, HTML, CSS, Material-UI, and PostgreSQL.</p>



<p>For my son, Liam. I love you, peanut!</p>
<br/>
<p>Connect with me on LinkedIn!</p>
<img width="150px" height="150px" src={LinkedIn}></img>

<footer>"No act of kindness, no matter how small, is ever wasted."  - Aesop</footer>
      </div>
    </div>
  );
}

export default AboutPage;
