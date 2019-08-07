import React, { Component } from 'react';
import Stairs from '../../images/stairs.jpg';
import Sherwood from '../../images/sherwoodgardens.jpg';



class AboutPage extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<div className="container about">
        
        	<h1>About Stevie</h1>

        	<p>Stevie was born in Florida on a hot summer morning. She was the runt from a litter of ten puppies. Stevie enjoys moderate hikes, lots of swimming, and fetch, but her favorite thing to do is lay on the couch and cuddle. Below are a few fun facts about Stevie.</p>

        	<div className="grid-container">
        		<div className="row">
        			<div className="col-4">
        				<p><strong>Age:</strong> 7 years old</p>
        			</div>
        			<div className="col-4">
        				<p><strong>Breed:</strong> Golden Retriever</p>
        			</div>
        			<div className="col-4">
        				<p><strong>Astrological chart:</strong> Sun in Leo and Moon in Virgo.</p>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-4">
        				<p><strong>Favorite band:</strong> Fleetwood Mac</p>
        			</div>
        			<div className="col-4">
        				<p><strong>Favorite Fleetwood Mac song:</strong> Dreams</p>
        			</div>
        			<div className="col-4">
        				<p><strong>Favorite color:</strong> gold</p>
        			</div>
        		</div>
        	</div>
		</div>
      </div>
    )
  }
}

export default AboutPage;