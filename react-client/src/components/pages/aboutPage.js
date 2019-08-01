import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <h1>About Stevie</h1>

        <p>Stevie was born in Florida on a hot summer morning. She was the runt from a litter of ten puppies. Stevie enjoys moderate hikes, lots of swimming, and fetch, but her favorite thing to do is lay on the couch and cuddle.</p>

        <div className="grid-container">
        	<div className="row">
        		<div className="col-4">
        			<p>Age: 7 years old</p>
        		</div>
        		<div className="col-4">
        			<p>Breed: Golden Retriever</p>
        		</div>
        		<div className="col-4">
        			<p>Astrological chart: Sun in Leo, Moon in Virgo, Rising in .</p>
        		</div>
        	</div>
        	<div className="row">
        		<div className="col-4">
        			<p>Favorite band: Fleetwood Mac</p>
        		</div>
        		<div className="col-4">
        			<p>Favorite Fleetwood Mac song: Dreams</p>
        		</div>
        		<div className="col-4">
        			<p>Favorite color: gold</p>
        		</div>
        	</div>
        </div>

      </div>
    )
  }
}

export default AboutPage;