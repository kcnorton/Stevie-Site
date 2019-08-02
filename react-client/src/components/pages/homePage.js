import React, { Component } from 'react';
import Sherwood from '../../images/sherwoodgardens.jpg';

class HomePage extends Component {
  render() {
    return (
    	<div className="container-fluid">	
      		<div className="grid-container">
      			<div className="row">

      				<div className="col-6">
      					<img src={Sherwood} alt="stevie in sherwood gardens"/>
      				</div>

      				<div className="col-6">
        				<h1>I'm Stevie.</h1>
        				<p>Hi, I am Stevie. This is my website homepage. I love clicking around the internet surfing the web, and I hope you do too. Welcome to my website homepage, please enjoy clicking around. If you want to learn more about me Stevie, you're in the right place. There is lots of information about me on my website.</p>
      				</div>

      			</div>
      		</div>
     	</div>
    )
  }
}

export default HomePage;